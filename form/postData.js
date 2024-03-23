async function postJSON(data) {
    try {
      const response = await fetch("https://gcg26z23bkwwsnhsghcon7f4bu0mzanh.lambda-url.us-west-2.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }