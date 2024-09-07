/*
Description

Explanation of the concept

Genetic algorithms are a useful tool for machine learning. One simple way to find a solution to a problem that would typically 
be too difficult to brute force is through algorithms such as these.

For example, say our problem is, given the list [1,2,3,4,5,6,7,8,9,10], find a way to partition the list into two lists such 
that the sum of one list is 38 and the product of the other list is 210. You could of course brute force it, using the fact 
that you can find the divisors of 210. But say you have the list of numbers from 1 to 50! That makes it a lot more difficult, 
and if we are not looking for a sum or product that is actually possible, just close to a given number, it's even harder to do 
by brute force.

Genetic algorithms are based on the idea that you can create a chromosome that represents a potential solution to your problem. 
One way of representing such a chromosome is with a binary string of digits. In our example, we could represent one chromosome 
as 0010010111, and decide that 0 means that the corresponding number is in the "sum" pile and 1 means it is in the "product" 
pile, so this chromosome gives us 1+2+4+5+7=19 and 3*6*8*9*10=12960. Not very close. But the point is that you can easily 
represent any potential solution as a binary string!

Now, the key to a genetic algorithm is to generate many chromosomes, a large population, if you will. The "genetic" part of 
the name comes from the fact that we will, in a sense, let evolution bring our chromosomes as close as possible to our desired 
solution. So what we do is generate a population of random chromosomes. Then we calculate the fitness of those chromosomes in 
whatever way fits the problem. In our case, we want to minimize the absolute difference of the sum from the ideal sum and 
likewise for the product, so one way we can calculate a "score" of how good our estimate is is 
sqrt((chromosome sum - ideal sum)^2+(chromosome product - ideal product)^2). We want to, of course, maximize fitness, so the 
closer our score is to 0 (that is, the closer the chromosome is to ideal), the bigger the fitness is. So what we can do is let 
our fitness be 1/(score + 1); a fitness of 0 means it's nowhere near what we want, and a fitness of 1 means we have exactly the 
right answer!

The evolution step involves taking a look at our population and selecting by fitness. This is done in a few steps:

Select two chromosomes from our original population. This is not done purely randomly. This is done using what is called 
"roulette wheel selection", where the chances of picking a chromosome are proportional to its fitness! This means we are more 
likely to pick out chromosomes that are closer to our answer. Duplicate these chromosomes.
With a probability p_c, a crossover occurs between these two new chromosomes. That means at some random bit along the length of 
the chromosome, we cut off the rest of the chromosome and switch it with the cut off part of the other one. In other words, say 
we have 01011010 and 11110110 and we crossover at the 3rd bit. This results in 010 10110 and 111 11010.
With a probability p_m, a mutation can occur at every bit along each new chromosome; the mutation rate is typically very small.
Add these two new chromosomes into our new population and repeat steps 1-3 until you have a new population the same size as the 
original one. For obvious reasons, this is easier if you start off with an even sized original population.
Our goal here is to run the evolution process many times. Eventually, all the chromosomes in our population will have a fitness 
close to 1! When we feel we have done enough runs, that is the time to cut it off, find the chromosome with the highest fitness,
and return that as the result.

Your task

We'll keep this task fairly simple. You will be given an outline of a GeneticAlgorithm class with a few methods. The crossover 
and mutate methods are self-explanatory: they take in two chromosomes or one and a probability (respectively) and return a 
crossed-over pair or a mutated chromosome. The generate method generates a random chromosome of a given length (use this in your 
run method to create a population). The select method will take a population and a corresponding list of fitnesses and return 
two chromosomes selected with the roulette wheel method. The run method will take a fitness function that accepts a chromosome 
and returns the fitness of that chromosome, the length of the chromosomes to generate (should be the same length as the goal 
chromosome), the crossover and mutation probabilities, and an optional number of iterations (default to 100). Make the 
population size whatever you want; 100 is a good number but anywhere between 50 and 1000 will work just fine (although the 
bigger, the slower). After the iterations are finished, the method returns the chromosome it deemed to be fittest. This fitness 
function will be preloaded (Helper.Fitness in C#)! What the test will do is generate a random binary string of 35 digits (a 
random Integer with 35 bits for Ruby), and your algorithm must discover that string! The fitness will be calculated in a way 
similar to above, where the score of a chromosome is the number of bits that differ from the goal string.

The crossover probability we will use is 0.6 and the mutation probability we will use is 0.002. Now, since the chromosome length 
is small, 100 iterations should be enough to get the correct answer every time. The test fixture will run the algorithm 10 times 
on 10 different goal strings. If not all of them work, then you can try again and you'll probably be fine.

Good luck and have fun!
*/

export class GeneticAlgorithm {
  generate(length: number) {
    let chromosome = "";
    for (let i = 1; i <= length; i++) {
      let t = Math.random() * 2;
      let c = t < 1 ? "0" : "1";
      chromosome += c;
    }
    return chromosome;
  }

  select(population: string[], fitnesses: number[]) {
    let sum = 0;
    for (let x = 0; x < fitnesses.length; x++) {
      sum += fitnesses[x];
    }
    let probs = new Array(population.length);
    let prevProb = 0.0;
    for (let x = 0; x < population.length; x++) {
      probs[x] = prevProb + fitnesses[x] / sum;
      prevProb = probs[x];
    }
    let r1 = Math.random();
    let count = 0;
    while (r1 > probs[count]) {
      count++;
    }
    let selectedChromosomes = new Array(2);
    selectedChromosomes[0] = population[count];
    let r2 = Math.random();
    count = 0;
    while (r2 > probs[count]) {
      count++;
    }
    selectedChromosomes[1] = population[count];
    return selectedChromosomes;
  }

  mutate(chromosome: string, p: number) {
    let newChromosome = "";
    for (let i = 0; i < chromosome.length; i++) {
      let c = chromosome.charAt(i);
      let prob = Math.random();
      if (prob < p) {
        c = c == "1" ? "0" : "1";
      }
      newChromosome += c;
    }
    return newChromosome;
  }

  crossover(chromosome1: string, chromosome2: string) {
    let newChromosomes = new Array(2);
    let l = Math.floor(Math.random() * chromosome1.length);
    newChromosomes[0] = chromosome1.substring(0, l) + chromosome2.substring(l);
    newChromosomes[1] = chromosome2.substring(0, l) + chromosome1.substring(l);
    return newChromosomes;
  }

  run(
    fitness: (chromosome: string) => number,
    length: number,
    p_c: number,
    p_m: number,
    iterations = 100
  ) {
    let chromosomes = new Array(100);
    for (let i = 0; i < 100; i++) {
      chromosomes[i] = this.generate(length);
    }
    let fitnesses = new Array(100);
    for (let i = 0; i < 100; i++) {
      fitnesses[i] = fitness(chromosomes[i]);
    }
    for (let i = 0; i < iterations; i++) {
      let newChromosomes = new Array(100);
      let newFitnesses = new Array(100);
      for (let j = 0; j < 50; j++) {
        let A = this.select(chromosomes, fitnesses);
        let p = Math.random();
        if (p < p_c) {
          A = this.crossover(A[0], A[1]);
        }
        for (let k = 0; k < 2; k++) {
          A[k] = this.mutate(A[k], p_m);
        }
        newChromosomes[2 * j] = A[0];
        newChromosomes[2 * j + 1] = A[1];
        newFitnesses[2 * j] = fitness(A[0]);
        newFitnesses[2 * j + 1] = fitness(A[1]);
      }
      chromosomes = newChromosomes;
      fitnesses = newFitnesses;
    }
    let ans = "";
    let val = 0;
    for (let i = 0; i < 100; i++) {
      if (fitness(chromosomes[i]) > val) {
        ans = chromosomes[i];
        val = fitness(chromosomes[i]);
      }
    }
    return ans;
  }
}
