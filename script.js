async function sendMessages(event) {
    event.preventDefault();

    const phoneNumber = document.querySelector(".name").value.trim();

    try {
        const formData = new FormData();

        formData.append("appkey", "app-key");
        formData.append("authkey", "auth-key");
        formData.append("to", phoneNumber);
        formData.append("template_id", "otp");
        formData.append("language", "en");
        formData.append("variables[{variableKey1}]", "951236");
        formData.append("buttons[{b1_type}]", "url");
        formData.append("buttons[{b1_value}]", "951236");

        const response = await fetch(
            "https://vl4.nxccontrols.in/api/create-message",
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                `Status: ${response.status} - ${
                    result.message || "Unknown error"
                }`
            );
        }

        console.log(" Message status:", result.message_status);
        alert(`Message sent to ${phoneNumber}`);
    } catch (error) {
        console.error("Error sending message:", error);
        alert(`Failed to send message: ${error.message}`);
    }
}
