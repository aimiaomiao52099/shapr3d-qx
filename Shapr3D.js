let obj = JSON.parse($response.body);
obj.subscriptionType = "pro_year";
obj.subscriptionExpires = "2100-01-01T00:00:00.000Z";
obj.subscriptionState = "active";
obj.subscriptionAutoRenewStatus = true;
obj.subscriptionPaymentType = "in_app";
obj.subscriptionSource = "ios";
obj.entitlements = ["pro"];
$done({body: JSON.stringify(obj)});
