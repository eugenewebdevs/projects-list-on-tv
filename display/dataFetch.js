async function listData(){
    const response = await fetch("https://newton-list-bucket.s3.us-west-2.amazonaws.com/my-file.json");
    const list = await response.json();
    alert(list.body);
}