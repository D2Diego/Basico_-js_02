const students = [
    {
        name: 'Ananda',
        n1: 8,
        n2: 7
    },
    {
        name: 'Rodrigo',
        n1: 7,
        n2: 6,
    },
    {
        name: 'Felipe',
        n1: 8,
        n2: 9,
    },
    {
        name: 'Nakagomi',
        n1: 5,
        n2: 9,
    }
]

function average(n1, n2) {
    return (n1 + n2) / 2
}

function printAverage(student) {
    return average(student.n1, student.n2)
}

for (let student of students) {
    let averageMensage = printAverage(student)
    if (averageMensage >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} é ${averageMensage} \nParabéns!! Você passou no concurso`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é ${averageMensage}\nInfelizmente não foi dessa vez.`)
    }
}
