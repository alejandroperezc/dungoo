export default function handler(request, response) {

    const questions = [
    
    {"pregunta" : ["cuanto es 2+2?","2",false,"1",false,"4",true,"5",false]},
    {"pregunta" : ["cuanto es 3+3?","4",false,"2",false,"6",true,"7",false]},
    {"pregunta" : ["cuanto es 4+4?","6",false,"3",false,"8",true,"9",false]}

    ]

    response.json(questions);
}