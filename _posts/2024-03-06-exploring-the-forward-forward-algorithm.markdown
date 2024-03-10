---
layout: post
mathjax: true
comments: true
title:  "Exploring the Forward-Forward Algorithm"
date:   2024-03-06 15:06:08 +0100
---

For my bachelor's thesis, I explored an interesting alternative to the widely-used backpropagation algorithm for training neural networks, called the Forward-Forward algorithm. This algorithm was recently proposed by Geoffrey Hinton, one of the pioneers of deep learning. This exploration led me to implement the backpropagation algorithm from scratch in MATLAB and conduct a comparative analysis with Hinton's Forward-Forward implementation.

## What is the Forward-Forward algorithm?

The Forward-Forward algorithm {% cite hinton2022forward %} is an intriguing approach that aims to mimic the learning process in biological neural networks more closely than backpropagation. By avoiding the backwards propagation of errors, the algorithm aligns more closely with the local learning mechanisms observed in the brain. 

{:refdef: style="text-align: center;"}
![image](/assets/images/blog/exploring-the-forward-forward-algorithm/image2.png){: width="500"}
{: refdef}

Instead of having a forward pass followed by a backward pass to compute gradients, the Forward-Forward algorithm uses two forward passes: one with positive data (real training data) and another with negative data (generated or corrupted data).

During the positive pass, the weights are adjusted to increase the "goodness" of the hidden layer activations. In the negative pass, the weights are adjusted to decrease the "goodness" of the hidden layer activations. This process is inspired by the idea that our brains learn not only from positive examples but also from negative or corrupted data.

## Advantages and potential applications

One of the key advantages of the Forward-Forward algorithm is that it does not require explicitly computing gradients or storing activations for the backward pass, as is the case with backpropagation. This makes it potentially more biologically plausible and opens up possibilities for efficient implementations on analog hardware.

Hinton suggests that the Forward-Forward algorithm could be a better model for how our brains learn, with positive data being processed during wakefulness and negative data being generated and processed during sleep. Additionally, the algorithm could enable the development of energy-efficient hardware that does not adhere to the traditional von Neumann architecture, where software and hardware are strictly separated

## My thesis work

In my thesis, I explored the Forward-Forward algorithm through a practical implementation and application to the MNIST dataset of handwritten digits. I implemented the algorithm and compared its performance to traditional backpropagation-based training. 

While the results showed that backpropagation still outperforms the Forward-Forward algorithm in terms of accuracy and training time for this specific task, the algorithm demonstrated promising potential, especially in terms of its biological plausibility and potential for efficient hardware implementations.

| algorithm | training time | accuracy (%) | flop (M) |
|-----------|---------------|--------------|----------|
| FF        | 17.73 minutes | 98.14        | 7.608    |
| BP        | 15.37 minutes | 97.98        | 7.588    |

Overall, my thesis work provided valuable insights into this novel algorithm and its potential applications in the field of neural network training and hardware acceleration.

If you're interested in learning more about my thesis or the Forward-Forward algorithm, feel free to reach out or check out the resources linked below.

[Link to thesis PDF](/assets/pdf/tesi_di_laurea.pdf)

References
----------

{% bibliography --cited %}
