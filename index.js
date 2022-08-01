class Neuron {
    constructor(inputs, expectedResult) {
        this.inputs = inputs;
        this.weights = [];
        this.bias = 0;
        this.expected = expectedResult;
        this.learningRate = 0.1;

        this.genWeights();
    }

    genWeights() {
        console.log("Gerando pesos primários");
        this.inputs.push(this.bias);
        for (let i = 0; i < this.inputs.length; i++) {
            this.weights.push(Math.random());
        }
    }

    newWeights(output) {
        console.log("Gerando novos pesos");
        this.weights.forEach((value, index) => {
            this.weights[index] = value + this.learningRate * (this.expected - output) * this.inputs[index];
        });
    }

    activationFunction() {
        let result = 0;
        this.inputs.forEach((value, index) => {
            result += value * this.weights[index];
        });

        let output = (result >= 0) ? 1 : 0;

        if (output != this.expected) {
            this.newWeights(output);
            this.activationFunction();
        } else {
            console.log(`ENTRADAS: ${this.inputs}\nPESOS: ${this.weights}\nRESULTADO: ${result}\nESPERADO: ${this.expected}\nRETORNADO: ${output}`);
        }
    }
}

let n = new Neuron([1, 0], 0);
n.activationFunction();