window.watsonAssistantChatOptions = {
    integrationID: "a4ebaa20-24e6-4dbc-b097-faef2c470f62", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "8e52c2a2-891e-4803-a81d-eb9008f24d00", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});