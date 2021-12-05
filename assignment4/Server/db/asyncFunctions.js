// import necessary modules
const util = require('util');
const createConnection = require('./connection');

// async function to register user if it does not exist
async function registerUser(username, password, cardNo, address) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const users = await query(`SELECT * FROM users`);

    for (let user of users) {
      if (user.Username === username) {
        return {message: 'Username Taken!', success: false};
      }
    }

    // inserts user if the block of code above didn't return
    await query(`
      INSERT INTO users (Username, Password, CreditCardNo, Address) VALUES (
        '${username}'
        ,'${password}'
        ,${ cardNo.length === 16 ? `'${cardNo}'` : null}
        ,'${address}'
      )
    `);
    return {message: 'Successfully added user!', success: true};
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to insert new tool
async function insertTool(toolname, toolprice, tooltype, username, sale, rent) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const user = await query(`SELECT UserID FROM users WHERE Username = '${username}'`);

    console.log(user);
    if (user.length !== 1) {
      return {message: 'Invalid Credentials', success: false};
    }

    await query(`
      INSERT INTO tools (ToolName, UserID, Price, ToolType, ForSale, ForRent) VALUES (
        '${toolname}'
        ,${user[0].UserID}
        ,'${toolprice}'
        ,'${tooltype}'
        ,${sale}
        ,${rent}
      )
    `);
    return {message: 'Successfully added tool!', success: true};
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// async function to get data of user and all the users tools
async function getUserDetails(username) {
  const conn = createConnection();
  conn.connect();

  const query = util.promisify(conn.query).bind(conn);

  try {
    const user = await query(`SELECT * FROM users WHERE username = '${username}'`);
    const tools = await query(`SELECT * FROM tools WHERE UserID = ${user[0].UserID}`);

    console.log(user[0]);
    console.log(tools);

    const data = {
      user: user[0],
      tools: tools
    }

    return { data: data };
  } catch (e) {
    throw e;
  } finally {
    conn.end();
  }
}

// export the functions
module.exports = {
  registerUser: registerUser,
  insertTool: insertTool,
  getUserDetails: getUserDetails
}
