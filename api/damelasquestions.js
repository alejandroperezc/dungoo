export default function handler(request, response) {

    const questions = {
        "pregunta" : "cuanto es dos mas dos?"
    };

    response.json(questions);
}