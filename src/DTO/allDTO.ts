

interface aPIRequest{
    question :string ,
}

interface ChatHistory {
    chatId: string;
    question : string;
    response: string;
}

export  {aPIRequest, ChatHistory};