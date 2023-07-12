async function registerUser() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('usernameReg').value;
    const password = document.getElementById('passwordReg').value;

    // Check if any input is empty
    if (!firstName || !lastName || !email || !username || !password) {
      return alert('All fields are required.');
    }

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Failed to register user.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering user.');
    }
  }

  async function loginUser() {
    const username = document.getElementById('usernameLog').value;
    const password = document.getElementById('passwordLog').value;

    // Check if any input is empty
    if (!username || !password) {
      return alert('Username and password are required.');
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Failed to login.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in.');
    }
  }