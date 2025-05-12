// async function fetchMessageData() {
//   try {
//     const response = await fetch(
//       "https://dthclass.com/api/AnonymousDataGet/ExecuteJson/spTblWhatsappMessageRandom/1",
//       {
//         method: "POST",
//         headers: {
//           accept: "text/plain",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           additionalProp1: "string",
//           additionalProp2: "string",
//           additionalProp3: "string",
//         }),
//       }
//     );

//     const textData = await response.text();
//     const parsed = JSON.parse(textData);
//     const resultData = JSON.parse(parsed.result);
//     return {
//       WhatsappSendId: resultData[0].WhatsappSendId,
//       RandamString: resultData[0].RandamString,
//     };
//   } catch (error) {
//     console.error("Check first api", error);
//     throw error;
//   }
// }

// async function sendMessage(WhatsappSendId, RandamString) {
//   try {
//     const response = await fetch(
//       "https://dthclass.com/api/AnonymousDataGet/ExecuteJson/spTblWhatsappMessageRandom/1",
//       {
//         method: "POST",
//         headers: {
//           accept: "text/plain",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           WhatsappMessage: "hello",
//           SenderNumber: "8116583191",
//           ReciverNumber: "12457896354",
//           WhatsappSendId,
//           RandamString,
//         }),
//       }
//     );

//     const result = await response.json();
//     return result.statusCode === 201;
//   } catch (error) {
//     console.error("Error sending message:", error);
//     return false;
//   }
// }

// async function sendFinalMessage(event) {
//   event.preventDefault();
//   const phoneNumber = document.querySelector(".name").value.trim();

//   if (!phoneNumber) {
//     alert("Please enter a phone number.");
//     return;
//   }

//   try {
//     const formData = new FormData();
//     formData.append("appkey", "app-key");
//     formData.append("authkey", "auth-key");
//     formData.append("to", phoneNumber);
//     formData.append("template_id", "otp");
//     formData.append("language", "en");
//     formData.append("variables[{variableKey1}]", "951236");
//     formData.append("buttons[{b1_type}]", "url");
//     formData.append("buttons[{b1_value}]", "951236");

//     const response = await fetch("https://vl4.nxccontrols.in/api/create-message", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }

//     console.log("Message status:", result.message_status);
//     alert(`Message sent to ${phoneNumber}`);
//   } catch (error) {
//     console.error("Error sending final message:", error);
//     alert(`Failed to send message: ${error.message}`);
//   }
// }

// async function startProcess() {
//   try {
//     const { WhatsappSendId, RandamString } = await fetchMessageData();
//     const isMessageSent = await sendMessage(WhatsappSendId, RandamString);

//     if (isMessageSent) {
//       document.querySelector("form").addEventListener("submit", sendFinalMessage, false);
//     } else {
//       alert("Failed.");
//     }
//   } catch (error) {
//     console.error("Process failed:", error);
//   }
// }

// startProcess();

const url = "https://vl4.nxccontrols.in/api/create-message";

const formData = new FormData();
formData.append("appkey", "app-key");
formData.append("authkey", "auth-key");
formData.append("to", "phonenumber");
formData.append("template_id", "sell_details_from_website_to_teacher");
formData.append("language", "en");

// Variables
formData.append("variables[{purchase_date}]", "10/05/2025");
formData.append("variables[{order_id}]", "1010");
formData.append("variables[{total_amount}]", "250");
formData.append("variables[{Student_name}]", "tryhr");
formData.append("variables[{Student_Email}]", "r@example.com");
formData.append("variables[{Student_Phone}]", "phone-number");
formData.append("variables[{Student_Address}]", "jkhafwdd");
formData.append("variables[{StudentStateand_pincode}]", "741245");
formData.append("variables[{Student_City}]", "jh");
formData.append("variables[{Student_Packages}]", "jwd");

// Button
formData.append("buttons[{b1_type}]", "url");
formData.append("buttons[{b1_value}]", "951236");

fetch(url, {
    method: "POST",
    body: formData,
})
    .then((response) => response.text())
    .then((result) => console.log("Success:", result))
    .catch((error) => console.error("Error:", error));
