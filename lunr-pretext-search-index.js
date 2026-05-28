var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " These notes were developed by the first author in the process of teaching a course on applied numerical methods for Civil Engineering majors during 2002-2004. The course was modified to include Mechanical Engineering majors in 2005. The materials underwent a major revision by the second author in 2006-2007 and have been periodically updated since then. We are grateful to Yaqin Feng and Erik Boczko who have taught the course several times and made many suggestions that improved the notes. Thanks also go to numerous students who have pointed out typos and mistakes.  The goal of these lectures is to introduce concepts of numerical methods while simulataneously introducing programming principles using MATLAB.  In these lecture notes, MATLAB programming is interspersed with material on numerical methods. We have strived to make MATLAB instructions detailed and explicit, but not verbose. Often students are asked to write new programs based on working examples. The exercises grow in complexity as the students build their programming skills.  The material assumes only the topics covered in a typical Calculus I and II sequence, plus an understanding of differential equations at the level sometimes taught in Calculus II. The material on Linear Algebra starts from the beginning and was designed to be a quick introduction to the topic. The material on differential equations starts with Euler's method culminates with an intro to Finite Elements. Overall, the student should leave the course with a very broad understanding of numerical methods.  The lectures are intended to be used in a computer classroom with students working MATLAB examples during the lecture or with students reading the notes and working the examples after a brief introduction. At Ohio University we have had good success with this Lecture\/Lab format. We ask students to complete all of the exercises in groups of 2-3 students and this accounts for a significant portion of the grade (e.g. 30%.). Typically we will give an exam covering each of the first three chapters and a comprehensive final exam. We have sometimes employed student projects in addition to or instead of exams. We typically cover all sections except 2.10, covering one section per class meeting. For those who want or need to eliminate some sections, we show the dependencies between sections below.    Section dependencies graph.     Todd Young and Martin Mohlenkamp  June 2026    "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors, Functions, and Plots in MATLAB",
  "body": " Vectors, Functions, and Plots in MATLAB   In these notes    will indicate commands to be entered at the MATLAB prompt >> in the command window. You do not type the symbol >>.    Entering vectors  In MATLAB, the basic objects are matrices, i.e. arrays of numbers. Vectors can be thought of as special matrices. A row vector is recorded as a matrix and a column vector is recorded as a matrix. To enter a row vector in MATLAB, type the following in the command window:  v = [0 1 2 3]  and press enter. MATLAB will print out the row vector. To enter a column vector type  u = [9; 10; 11; 12; 13]  You can access an entry in a vector with  u(2)  and change the value of that entry with  u(2)=47  You can extract a slice out of a vector with  u(2:4)  You can change a row vector into a column vector, and vice versa, easily in MATLAB using  w = v'  (This is called transposing the vector and we call ' the transpose operator.) There are also useful shortcuts to make vectors such as  x = -1:.1:1  y = linspace(0,1,11)      Basic Formatting  To make MATLAB put fewer blank lines in its output, enter  format compact  pi  x  To make MATLAB display more digits, enter  format long  pi  Note that this does not change the number of digits MATLAB is using in its calculations; it only changes what is displayed.    Plotting Data  Consider the data in Table (Adapted from Ayyup &McCuen 1996, p.174.)       T (C )  5  20  30  50  55     0.08  0.015  0.009  0.006  0.0055       Viscosity of a liquid as a function of temperature.   We can enter this data into Matlab with the following commands entered in the command window:  x = [ 5 20 30 50 55 ]  y = [ 0.08 0.015 0.009 0.006 0.0055]  Entering the name of the variable retrieves its current values. For instance  x  y  We can plot data in the form of vectors using the plot command:  plot(x,y)  This will produce a graph with the data points connected by lines. If you would prefer that the data points be represented by symbols you can do so. For instance  plot(x,y,'*')  plot(x,y,'o')  plot(x,y,'.')      Data as a Representation of a Function  A major theme in this course is that often we are interested in a certain function , but the only information we have about this function is a discrete set of data . Plotting the data, as we did above, can be thought of envisioning the function using just the data. We will find later that we can also do other things with the function, like differentiating and integrating, just using the available data. Numerical methods, the topic of this course, means doing mathematics by computer. Since a computer can only store a finite amount of information, we will almost always be working with a finite, discrete set of values of the function (data), rather than a formula for the function.    Built-in Functions  If we wish to deal with formulas for functions, Matlab contains a number of built-in functions, including all the usual functions, such as sin( ) , exp( ) , etc.. The meaning of most of these is clear. The dependent variable (input) always goes in parentheses in MATLAB. For instance  sin(pi)  should return the value of , which is of course and  exp(0)  will return , which is . More importantly, the built-in functions can operate not only on single numbers but on vectors. For example  x = linspace(0,2*pi,41)  y = sin(x)  plot(x,y)  will return a plot of on the interval .  Some of the built-in functions in MATLAB include: cos( ) , tan( ) , sinh( ) , cosh( ) , log( ) (natural logarithm), log10( ) (log base 10), asin( ) (inverse sine), acos( ) , atan( ) . To find out more about a function, use the help command; try  help plot      User-Defined Anonymous Functions  If we wish to deal with a function that is a combination of the built-in functions, Matlab has a couple of ways for the user to define functions. One that we will use a lot is the anonymous function, which is a way to define a function in the command window. The following is a typical anonymous function:  f = @(x) 2*x.^2 - 3*x + 1  This produces the function . To obtain a single value of this function enter  y = f(2.23572)  Just as for built-in functions, the function as we defined it can operate not only on single numbers but on vectors. Try the following:  x = -2:.2:2  y = f(x)  This is an example of vectorization, i.e. putting several numbers into a vector and treating the vector all at once, rather than one component at a time, and is one of the strengths of MATLAB. The reason works when is a vector is because we represented by x.^2 . The . turns the exponent operator ^ into entry-wise exponentiation, so that [-2 -1.8 -1.6].^2 means and yields [4 3.24 2.56] . In contrast, [-2 -1.8 -1.6]^2 means the matrix product and yields only an error. The . is needed in .^ , .* , and .\/ . It is not needed when you * or \/ by a scalar or for + .  The results can be plotted using the plot command, just as for data:  plot(x,y)  Notice that before plotting the function, we in effect converted it into data. Plotting on any machine always requires this step.     Recall that .* , .\/ , .^ are component-wise operations. Make row vectors a= 0:1:3 and b= [-1 0 1 2] . Try the following commands and report the answer (or error) they produce. Are any of the results surprising?   a.*b  a*b  a*b'  a+3*b  a.\/b  2*b.\/a  a.^3  a.^b      Find a table of data in an engineering or science textbook or website. Input it as vectors and plot it, using symbols at the data points . Use the insert icon to label the axes and add a title to your graph. Turn in the graph. Indicate what the data is and properly reference where it came from.    Find a non-linear function formula in an engineering or science textbook or website. Make an anonymous function that produces that function. Plot it with a smooth curve on a physically relevant domain.  Label the axes and add a title to your graph. Turn in the graph and include the MATLAB command for the anonymous function. Indicate what the function means and properly reference where it came from.    "
},
{
  "id": "tab-viscosity",
  "level": "2",
  "url": "sec-vectors.html#tab-viscosity",
  "type": "Table",
  "number": "1.1.1",
  "title": "Viscosity of a liquid as a function of temperature.",
  "body": "     T (C )  5  20  30  50  55     0.08  0.015  0.009  0.006  0.0055       Viscosity of a liquid as a function of temperature.  "
},
{
  "id": "sec-vectors-9-1",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-9-1",
  "type": "Exercise",
  "number": "1.1.7.1",
  "title": "",
  "body": " Recall that .* , .\/ , .^ are component-wise operations. Make row vectors a= 0:1:3 and b= [-1 0 1 2] . Try the following commands and report the answer (or error) they produce. Are any of the results surprising?   a.*b  a*b  a*b'  a+3*b  a.\/b  2*b.\/a  a.^3  a.^b    "
},
{
  "id": "sec-vectors-9-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-9-2",
  "type": "Exercise",
  "number": "1.1.7.2",
  "title": "",
  "body": " Find a table of data in an engineering or science textbook or website. Input it as vectors and plot it, using symbols at the data points . Use the insert icon to label the axes and add a title to your graph. Turn in the graph. Indicate what the data is and properly reference where it came from.  "
},
{
  "id": "sec-vectors-9-3",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-9-3",
  "type": "Exercise",
  "number": "1.1.7.3",
  "title": "",
  "body": " Find a non-linear function formula in an engineering or science textbook or website. Make an anonymous function that produces that function. Plot it with a smooth curve on a physically relevant domain.  Label the axes and add a title to your graph. Turn in the graph and include the MATLAB command for the anonymous function. Indicate what the function means and properly reference where it came from.  "
},
{
  "id": "sec-programs",
  "level": "1",
  "url": "sec-programs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matlab Programs",
  "body": " Matlab Programs   In Matlab, programs may be written and saved in files with a suffix .m called M-files. There are two types of M-file programs: functions and scripts.    Function Programs   Begin by clicking on the new document icon in the top left of the MATLAB window (it looks like an empty sheet of paper).  In the document window type the following:  function y = myfunc(x) y = 2*x.^2 - 3*x + 1; end  Save this file as: myfunc.m in your working directory. This file can now be used in the command window just like any predefined MATLAB function; in the command window enter:  x = -2:.1:2; % Produces a vector of x values  y = myfunc(x); % Produces a vector of y values  plot(x,y)  Note that the fact we used x and y in both the function program and in the command window was just a coincidence. In fact, it is the name of the file myfunc.m that actually mattered, not what anything in it was called. We could just as well have made the function  function nonsense = yourfunc(inputvector) nonsense = 2*inputvector.^2 - 3*inputvector + 1; end  Look back at the program. All function programs are like this one, the essential elements are:   Begin with the word function .    There is an input and an output.    The output, name of the function and the input must appear in the first line.    The body of the program must assign a value to the output variable(s).    The program cannot access variables in the current workspace unless they are input.    Internal variables inside a function do not appear in the current workspace.     Functions can have multiple inputs, which are separated by commas. For example:  function y = myfunc2d(x,p) y = 2*x.^p - 3*x + 1; end  Functions can have multiple outputs, which are collected into a vector. Open a new document and type:  function [x2 x3 x4] = mypowers(x) x2 = x.^2; x3 = x.^3; x4 = x.^4; end  Save this file as mypowers.m . In the command window, we can use the results of the program to make graphs:  x = -1:.1:1  [x2 x3 x4] = mypowers(x);  plot(x,x,'black',x,x2,'blue',x,x3,'green',x,x4,'red')      Printing, Returning, Capturing, and Printing  Notice that in the examples above, lines ending with a semicolon ; did not print their results.  Try the following:  myfunc(3)  ans^2  Although myfunc returned a value, we did not capture it. By default MATLAB captured it as ans so we can use it in our next computation. However, MATLAB always uses ans (for answer), so the result is likely to get overwritten.  Then try:  z = 0  z = myfunc(2)  z^2   myfunc returned a value that it internally called y and we captured the result in z . We can now use z for other calculations.  Now make a program  function myfuncnoreturn(x) y = 2*x.^2 - 3*x + 1 end  and try:  myfuncnoreturn(4)  ans^2  y^2  Although the value of y was printed within the function, it was not returned, so neither the value of y nor the value of ans was changed. Thus we cannot use the result from the function.  In general, the best way to use a function is to capture the result it returns and then use or print this result. Printing within functions is bad form; however, for understanding what is happening within a function it is useful to print, so many functions in this book do print.     Script Programs  MATLAB uses a second type of program that differs from a function program in several ways, namely:   There are no inputs and outputs.    A script program may use, create and change variables in the current workspace (the variables used by the command window).   Below is a script program that accomplishes the same thing as the function program plus the commands in the previous section:  x2 = x.^2; x3 = x.^3; x4 = x.^4; plot(x,x,'black',x,x2,'blue',x,x3,'green',x,x4,'red')  Type this program into a new document and save it as mygraphs.m . In the command window enter:  x = -1:.1:1;  mygraphs  Note that the program used the variable x in its calculations, even though x was defined in the command window, not in the program.  Many people use script programs for routine calculations that would require typing more than one command in the command window. They do this because correcting mistakes is easier in a program than in the command window.    Program Comments  For programs that have more than a couple of lines it is important to include comments. Comments allow other people to know what your program does and they also remind yourself what your program does if you set it aside and come back to it later. It is best to include comments not only at the top of a program, but also with each section. In MATLAB anything that comes in a line after a % is a comment.  For a function program, the comments should at least give the purpose, inputs, and outputs. A properly commented version of the function with which we started this section is:  function y = myfunc(x) % Computes the function 2x^2 -3x +1 % Input: x -- a number or vector; % for a vector the computation is elementwise % Output: y -- a number or vector of the same size as x y = 2*x.^2 - 3*x + 1; end  For a script program, there should be an initial comment stating the purpose of the script. It is also helpful to include the name of the program at the beginning. For example:  % mygraphs % plots the graphs of x, x^2, x^3, and x^4 % on the interval [-1,1] % fix the domain and evaluation points x = -1:.1:1; % calculate powers % x1 is just x x2 = x.^2; x3 = x.^3; x4 = x.^4; % plot each of the graphs plot(x,x,'+-',x,x2,'x-',x,x3,'o-',x,x4,'--')  The MATLAB command help prints the first block of comments from a file. If we save the above as mygraphs.m and then do  help mygraphs  it will print the first block of comments into the command window:  help mygraphs  mygraphs plots the graphs of x, x^2, x^3, and x^4 on the interval [-1,1]       Write a well-commented function program for the function , using component-wise operations (such as .* and .^ ). To get use exp(x) . Plot the function on using enough points to make the graph smooth. Turn in the program and the graph.    Write a well-commented script program that graphs the functions , , , , and on the interval on one plot. ( is pi in MATLAB.) Use a sufficiently small step size to make all the graphs smooth. Turn in the program and the graph.    "
},
{
  "id": "sec-programs-6-1",
  "level": "2",
  "url": "sec-programs.html#sec-programs-6-1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": " Write a well-commented function program for the function , using component-wise operations (such as .* and .^ ). To get use exp(x) . Plot the function on using enough points to make the graph smooth. Turn in the program and the graph.  "
},
{
  "id": "sec-programs-6-2",
  "level": "2",
  "url": "sec-programs.html#sec-programs-6-2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": " Write a well-commented script program that graphs the functions , , , , and on the interval on one plot. ( is pi in MATLAB.) Use a sufficiently small step size to make all the graphs smooth. Turn in the program and the graph.  "
},
{
  "id": "sec-newton",
  "level": "1",
  "url": "sec-newton.html",
  "type": "Section",
  "number": "1.3",
  "title": "Newton’s Method and Loops",
  "body": " Newton's Method and Loops   Solving equations numerically  For the next few sections we will focus on the problem of solving an equation: . As you learned in calculus, the final step in many optimization problems is to solve an equation of this form where is the derivative of a function, , that you want to maximize or minimize. In real engineering problems the functions, , you wish to find roots for can come from a large variety of sources, including formulas, solutions of differential equations, experiments, or simulations.    Newton iterations  We will denote an actual solution of by . There are three methods that you may have discussed in Calculus: the bisection method, the secant method and Newton's method. All three depend on beginning close (in some sense) to an actual solution .  Recall Newton's method. You should know that the basis for Newton's method is approximation of a function by its linearization at a point, i.e. . Since we wish to find so that , set the left hand side ( ) of this approximation equal to and solve for to obtain: . We begin the method with the initial guess , which we hope is fairly close to . Then we define a sequence of points from the formula: , which comes from . If is reasonably well-behaved near and is close enough to , then it is a fact that the sequence will converge to and will do it very quickly.    The loop: for ... end  In order to do Newton's method, we need to repeat the calculation in a number of times. This is accomplished in a program using a loop, which means a section of a program which is repeated. The simplest way to accomplish this is to count the number of times through. In MATLAB, a for ... end statement makes a loop as in the following simple function program:  % mysum % Gives the sum of the first n integers % n = 100 S = 0; % start at zero % The loop: for i = 1:n % do n times S = S + i; % add the current integer end % end of the loop S  Save this program as a script named mysum and run it by typing mysum in the command window. The result will be the sum of the first 100 integers. Next change to 1,000,000 and run the program again.  All for ... end loops have the same format, it begins with for , followed by an index ( i ) and a range of numbers ( 1:n ). Then come the commands that are to be repeated. Last comes the end command.  Loops are one of the main ways that computers are made to do calculations that humans cannot. Any calculation that involves a repeated process is easily done by a loop.  Now let's do a program that does n steps (iterations) of Newton's method. We will need to input the function, its derivative, the initial guess, and the number of steps. The output will be the final value of , i.e. . If we are only interested in the final approximation, not the intermediate steps, which is usually the case in the real world, then we can use a single variable x in the program mynewton.m and change it at each step:   mynewton   function x = mynewton(f,f1,x0,n) % Solves f(x) = 0 by doing n steps of Newton's method starting at x0. % Inputs: f -- the function % f1 -- it's derivative % x0 -- starting guess, a number % n -- the number of steps to do % Output: x -- the approximate solution x = x0; % set x equal to the initial guess x0 for i = 1:n % Do n times x = x - f(x)\/f1(x) % Newton's formula, prints x too end end    In the command window set to print more digits via  format long  and to not print blank lines via  format compact  Then define a function: i.e.  f = @(x) x^3 - 5  and define to be its derivative, i.e.  f1 = @(x) 3*x^2  Then run mynewton ( ) on this function. By trial and error, what is the lowest value of n for which the program converges (stops changing). By simple algebra, the true root of this function is . How close is the program's answer to the true value?    Convergence  Newton's method converges rapidly when is nonzero and finite, and is close enough to that the linear approximation is valid. Let us take a look at what can go wrong.  For we have but . If you try  f = @(x) x^(1\/3)  f1 = @(x) (1\/3)*x^(-2\/3)  x = mynewton(f,f1,0.1,10)  then explodes.  For we have but . If you try  f = @(x) x^2  f1 = @(x) 2*x  x = mynewton(f,f1,1,10)  then does converge to , but not that rapidly.  If is not close enough to that the linear approximation is valid, then the iteration gives some that may or may not be any better than . If we keep iterating, then either    will eventually get close to and the method will then converge (rapidly), or    the iterations will not approach .        Enter: format long . Use mynewton.m ( ) on the function , with . By trial and error, what is the lowest value of n for which the program converges (stops changing). Compute the error, which is how close the program's answer is to the true value. Compute the residual, which is the program's answer plugged into . (See the next section for discussion.) Are the error and residual zero?    For , perform 3 iterations of Newton's method with starting point . (By hand, but use a calculator.) Show all steps. Calculate the solution ( ) on a calculator and find the errors and percentage errors of , , and . Use enough digits so that you do not falsely conclude the error is zero.    Suppose a ball is dropped from a height of 3 meters onto a hard surface and the coefficient of restitution of the collision is .91 (see Wikipedia for an explanation). Write a well-commented script program to calculate the total distance the ball has traveled when it hits the surface for the n -th time. Enter: format long . By trial and error approximate how large n must be so that total distance stops changing. Turn in the program and a brief summary of the results. (This program does not use Newton's method. It should be modeled on mysum.m .)    "
},
{
  "id": "prg-mynewton",
  "level": "2",
  "url": "sec-newton.html#prg-mynewton",
  "type": "Program",
  "number": "1.3.1",
  "title": "mynewton",
  "body": " mynewton   function x = mynewton(f,f1,x0,n) % Solves f(x) = 0 by doing n steps of Newton's method starting at x0. % Inputs: f -- the function % f1 -- it's derivative % x0 -- starting guess, a number % n -- the number of steps to do % Output: x -- the approximate solution x = x0; % set x equal to the initial guess x0 for i = 1:n % Do n times x = x - f(x)\/f1(x) % Newton's formula, prints x too end end   "
},
{
  "id": "exercises-newton-1",
  "level": "2",
  "url": "sec-newton.html#exercises-newton-1",
  "type": "Exercise",
  "number": "1.3.5.1",
  "title": "",
  "body": " Enter: format long . Use mynewton.m ( ) on the function , with . By trial and error, what is the lowest value of n for which the program converges (stops changing). Compute the error, which is how close the program's answer is to the true value. Compute the residual, which is the program's answer plugged into . (See the next section for discussion.) Are the error and residual zero?  "
},
{
  "id": "exr-newtonbyhand",
  "level": "2",
  "url": "sec-newton.html#exr-newtonbyhand",
  "type": "Exercise",
  "number": "1.3.5.2",
  "title": "",
  "body": " For , perform 3 iterations of Newton's method with starting point . (By hand, but use a calculator.) Show all steps. Calculate the solution ( ) on a calculator and find the errors and percentage errors of , , and . Use enough digits so that you do not falsely conclude the error is zero.  "
},
{
  "id": "exr-bounce",
  "level": "2",
  "url": "sec-newton.html#exr-bounce",
  "type": "Exercise",
  "number": "1.3.5.3",
  "title": "",
  "body": " Suppose a ball is dropped from a height of 3 meters onto a hard surface and the coefficient of restitution of the collision is .91 (see Wikipedia for an explanation). Write a well-commented script program to calculate the total distance the ball has traveled when it hits the surface for the n -th time. Enter: format long . By trial and error approximate how large n must be so that total distance stops changing. Turn in the program and a brief summary of the results. (This program does not use Newton's method. It should be modeled on mysum.m .)  "
},
{
  "id": "sec-conditional",
  "level": "1",
  "url": "sec-conditional.html",
  "type": "Section",
  "number": "1.4",
  "title": "Controlling Error and Conditional Statements",
  "body": " Controlling Error and Conditional Statements   Measuring error and the Residual  If we are trying to find a numerical solution of an equation , then there are a few different ways we can measure the error of our approximation. The most direct way to measure the error would be as where is the -th approximation and is the true value. However, we usually do not know the value of , or we wouldn't be trying to approximate it. This makes it impossible to know the error directly, and so we must be more clever.  One possible strategy, which often works, is to run a program until the approximation stops changing. The problem with this is that it sometimes doesn't work. Just because the program stop changing does not necessarily mean that is close to the true solution.  For Newton's method we have the following principle: At each step the number of significant digits roughly doubles. While this is an important statement about the error (since it means Newton's method converges really quickly), it is somewhat hard to use in a program.  Rather than measure how close is to , in this and many other situations it is much more practical to measure how close the equation is to being satisfied, in other words, how close is to . We will use the quantity , called the residual, in many different situations. Most of the time we only care about the size of , so we use the absolute value of the residual as a measure of how close the solution is to solving the problem:     The if ... end statement  If we have a certain tolerance for , then we can incorporate that into our Newton method program using an if ... end statement:  function x = mynewton(f,f1,x0,n,tol) % Solves f(x) = 0 by doing n steps of Newton's method starting at x0. % Inputs: f -- the function % f1 -- it's derivative % x0 -- starting guess, a number % tol -- desired tolerance, prints a warning if |f(x)|>tol % Output: x -- the approximate solution x = x0; % set x equal to the initial guess x0 for i = 1:n % Do n times x = x - f(x)\/f1(x) % Newton's formula end r = abs(f(x)) if r > tol warning('The desired accuracy was not attained') end end  In this program if checks if abs(y) > tol is true or not. If it is true then it does everything between there and end . If not true, then it skips ahead to end .  In the command window define a function and its derivative:  f = @(x) x^3-5  f1 = @(x) 3*x^2  Then use the program with , , and . Next, change to and repeat.    The loop: while ... end  While the previous program will tell us if it worked or not, we still have to input n , the number of steps to take. Even for a well-behaved problem, if we make n too small then the tolerance will not be attained and we will have to go back and increase it, or, if we make n too big, then the program will take more steps than necessary.  One way to control the number of steps taken is to iterate until the residual is small enough. In MATLAB this is easily accomplished with a while ... end loop.  function x = mynewtontol(f,f1,x0,tol) % Solves f(x) = 0 using Newton's method until |f(x)| < tol. % Inputs: f -- the function % f1 -- it's derivative % x0 -- starting guess, a number % tol -- desired tolerance, runs until |f(x)|<tol % Output: x -- the approximate solution x = x0; % set x equal to the initial guess x0 y = f(x); while abs(y) > tol % Do until the tolerence is reached. x = x - y\/f1(x) % Newton's formula y = f(x) end end  The statement while ... end is a loop, similar to for ... end , but instead of going through the loop a fixed number of times it keeps going as long as the statement abs(y) > tol is true.  One obvious drawback of the program is that abs(y) might never get smaller than tol . If this happens, the program would continue to run over and over until we stop it. Try this by setting the tolerance to a really small number:  tol = 10^(-100)  then run the program again for . (You can use Ctrl-c to stop a program when it is stuck.)  One way to avoid an infinite loop is add a counter variable, say i and a maximum number of iterations to the programs. Using the while statement, this can be accomplished as:  function x = mynewtontol(f,f1,x0,tol) % Solves f(x) = 0 using Newton's method until |f(x)| < tol. % Safety stop after 1000 iterations % Inputs: f -- the function % f1 -- it's derivative % x0 -- starting guess, a number % tol -- desired tolerance, runs until |f(x)|<tol % Output: x -- the approximate solution x = x0; % set x equal to the initial guess x0. i=0; % set counter to zero y = f(x); while abs(y) > tol & i < 1000 % Do until the tolerence is reached or max iter. x = x - y\/f1(x) % Newton's formula y = f(x) i = i+1; % increment counter end end       In Calculus we learn that a geometric series has an exact sum provided that . For instance, if then the sum is exactly . Below is a script program that lacks one line as written. Put in the missing command and then use the program to verify the result above. How many steps does it take? How close is the answer to ?  % Computes a geometric series until it seems to converge format long format compact r = .5; Snew = 0; % start sum at 0 Sold = -1; % set Sold to trick while the first time i = 0; % count iterations while Snew > Sold % is the sum still changing? Sold = Snew; % save previous value to compare to Snew = Snew + r^i; i=i+1; Snew % prints the final value. i % prints the # of iterations.  Add a line at the end of the program to compute the error of Snew (with respect to the exact value from the formula above). Run the script for , 0.99, 0.999, 0.9999, 0.99999, and 0.999999. Turn in your program and a table showing the approximate sum, number of iterations needed and the error for each .    Modify your program from exercise to compute the total distance traveled by the ball while its bounces are at least 0.01 millimeter high. Use a while loop (instead of for ) to decide when to stop summing (do not use a for loop or trial and error). Turn in your modified program and a brief summary of the results.    "
},
{
  "id": "exercises-conditional-1",
  "level": "2",
  "url": "sec-conditional.html#exercises-conditional-1",
  "type": "Exercise",
  "number": "1.4.4.1",
  "title": "",
  "body": " In Calculus we learn that a geometric series has an exact sum provided that . For instance, if then the sum is exactly . Below is a script program that lacks one line as written. Put in the missing command and then use the program to verify the result above. How many steps does it take? How close is the answer to ?  % Computes a geometric series until it seems to converge format long format compact r = .5; Snew = 0; % start sum at 0 Sold = -1; % set Sold to trick while the first time i = 0; % count iterations while Snew > Sold % is the sum still changing? Sold = Snew; % save previous value to compare to Snew = Snew + r^i; i=i+1; Snew % prints the final value. i % prints the # of iterations.  Add a line at the end of the program to compute the error of Snew (with respect to the exact value from the formula above). Run the script for , 0.99, 0.999, 0.9999, 0.99999, and 0.999999. Turn in your program and a table showing the approximate sum, number of iterations needed and the error for each .  "
},
{
  "id": "exercises-conditional-2",
  "level": "2",
  "url": "sec-conditional.html#exercises-conditional-2",
  "type": "Exercise",
  "number": "1.4.4.2",
  "title": "",
  "body": " Modify your program from exercise to compute the total distance traveled by the ball while its bounces are at least 0.01 millimeter high. Use a while loop (instead of for ) to decide when to stop summing (do not use a for loop or trial and error). Turn in your modified program and a brief summary of the results.  "
},
{
  "id": "sec-bisection",
  "level": "1",
  "url": "sec-bisection.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Bisection Method and Locating Roots",
  "body": " The Bisection Method and Locating Roots   Bisecting and the if ... else ... end statement  Recall the bisection method. Suppose that and . If is continuous, then obviously it must be zero at some between and . The bisection method then consists of looking half way between and for the zero of , i.e. let and evaluate . Unless this is zero, then from the signs of , and we can decide which new interval to subdivide. In particular, if and have the same sign, then should be the new interval, but if and have different signs, then should be the new interval. (See .)    Schematic of the bisection method.   The bisection method.   Deciding to do different things in different situations in a program is called flow control. The most common way to do this is the if ... else ... end statement which is an extension of the if ... end statement we have used already.    Bounding the Error  One good thing about the bisection method, which we do not have with Newton's method, is that we always know that the actual solution is inside the current interval , since and have different signs. This allows us to be sure about what the maximum error can be. Precisely, the error is always less than half of the length of the current interval , i.e. where is the center point between the current and .  The following function program does iterations of the bisection method and returns not only the final value, but also the maximum possible error:  mybisect   function [x e] = mybisect(f,a,b,n) % function [x e] = mybisect(f,a,b,n) % Does n iterations of the bisection method for a function f % Inputs: f -- a function % a,b -- left and right edges of the interval % n -- the number of bisections to do. % Outputs: x -- the estimated solution of f(x) = 0 % e -- an upper bound on the error % evaluate at the ends and make sure there is a sign change c = f(a); d = f(b); if c*d > 0.0 error('Function has same sign at both endpoints.') end for i = 1:n % find the middle and evaluate there x = (a + b)\/2; y = f(x); if y == 0.0 % solved the equation exactly a = x; b = x; break % jumps out of the for loop end % decide which half to keep, so that the signs at the ends differ if c*y < 0 b=x; else a=x; end end % set the best estimate for x and the error bound x = (a + b)\/2; e = (b-a)\/2; end     Another important aspect of bisection is that it always works. We saw that Newton's method can fail to converge to if is not close enough to . In contrast, the current interval will always be decreased by a factor of 2 at each step and so it will always eventually shrink down as small as you wish.    Locating the roots (if any)  The bisection method and Newton's method are both used to obtain closer and closer approximations of a solution, but both require starting places. The bisection method requires two points and that have a root between them, and Newton's method requires one point which is reasonably close to a root. How do you come up with these starting points? It depends. If you are solving an equation once, then the best thing to do first is to just graph it. From an accurate graph you can see approximately where the graph crosses zero.  There are other situations where you are not just solving an equation once, but have to solve the same equation many times, but with different coefficients. This happens often when you are developing software for a specific application. In this situation the first thing you want to take advantage of is the natural domain of the problem, i.e. on what interval is a solution physically reasonable. If that is known, then it is easy to get close to the root by simply checking the sign of the function at a fixed number of points inside the interval. Whenever the sign changes from one point to the next, there is a root between those points. The following program will look for the roots of a function on a specified interval .  function [a,b] = myrootfind(f,a0,b0) % function [a,b] = myrootfind(f,a0,b0) % Looks for subintervals where the function changes sign % Inputs: f -- a function % a0 -- the left edge of the domain % b0 -- the right edge of the domain % Outputs: a -- an array, giving the left edges of subintervals % on which f changes sign % b -- an array, giving the right edges of the subintervals n = 1001; % number of test points to use a = []; % start empty array b = []; % split the interval into n-1 intervals and evaluate at the break points x = linspace(a0,b0,n); y = f(x); % loop through the intervals for i = 1:(n-1) if y(i)*y(i+1) <= 0 % The sign changed, record it a = [a x(i)]; b = [b x(i+1)]; end end if size(a,1) == 0 warning('no roots were found') end end  To see this program in action try the following:  f = @(x) sin(x)-2*x.^4+0.5  x = -1:.01:1;  y = f(x);  plot(x,y) % see that there are two roots  [a,b] = myrootfind(f,-1,1) % observe that it finds two roots    The final situation is writing a program that will look for roots with no given information. This is a difficult problem and one that is not often encountered in actual applications.  Once a root has been located on an interval , these and can serve as the beginning points for the bisection and secant methods (see the next section). For Newton's method one would want to choose between and . One obvious choice would be to let be the bisector of and , i.e. . An even better choice would be to use the secant method to choose .     Modify mybisect ( ) to solve until the absolute error is bounded by a given tolerance. Use a while loop to do this. Run your program on the function with starting interval and a tolerance of . How many steps does the program use to achieve this tolerance? (You can count the steps by adding 1 to a counting variable i in the loop of the program.) How big is the final residual ? Turn in your program and a brief summary of the results.    Perform 3 iterations of the bisection method on the function , with starting interval . (By hand, but use a calculator.) Calculate the errors and percentage errors of , , , and . Compare the errors with those in .    "
},
{
  "id": "fig-bisecfig",
  "level": "2",
  "url": "sec-bisection.html#fig-bisecfig",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "  Schematic of the bisection method.   The bisection method.  "
},
{
  "id": "prg-mybisect",
  "level": "2",
  "url": "sec-bisection.html#prg-mybisect",
  "type": "Program",
  "number": "1.5.2",
  "title": "mybisect",
  "body": " mybisect   function [x e] = mybisect(f,a,b,n) % function [x e] = mybisect(f,a,b,n) % Does n iterations of the bisection method for a function f % Inputs: f -- a function % a,b -- left and right edges of the interval % n -- the number of bisections to do. % Outputs: x -- the estimated solution of f(x) = 0 % e -- an upper bound on the error % evaluate at the ends and make sure there is a sign change c = f(a); d = f(b); if c*d > 0.0 error('Function has same sign at both endpoints.') end for i = 1:n % find the middle and evaluate there x = (a + b)\/2; y = f(x); if y == 0.0 % solved the equation exactly a = x; b = x; break % jumps out of the for loop end % decide which half to keep, so that the signs at the ends differ if c*y < 0 b=x; else a=x; end end % set the best estimate for x and the error bound x = (a + b)\/2; e = (b-a)\/2; end   "
},
{
  "id": "exercises-bisection-1",
  "level": "2",
  "url": "sec-bisection.html#exercises-bisection-1",
  "type": "Exercise",
  "number": "1.5.4.1",
  "title": "",
  "body": " Modify mybisect ( ) to solve until the absolute error is bounded by a given tolerance. Use a while loop to do this. Run your program on the function with starting interval and a tolerance of . How many steps does the program use to achieve this tolerance? (You can count the steps by adding 1 to a counting variable i in the loop of the program.) How big is the final residual ? Turn in your program and a brief summary of the results.  "
},
{
  "id": "exr-bisectionbyhand",
  "level": "2",
  "url": "sec-bisection.html#exr-bisectionbyhand",
  "type": "Exercise",
  "number": "1.5.4.2",
  "title": "",
  "body": " Perform 3 iterations of the bisection method on the function , with starting interval . (By hand, but use a calculator.) Calculate the errors and percentage errors of , , , and . Compare the errors with those in .  "
},
{
  "id": "sec-secant",
  "level": "1",
  "url": "sec-secant.html",
  "type": "Section",
  "number": "1.6",
  "title": "Secant Methods",
  "body": " Secant Methods   In this section we introduce two additional methods to find numerical solutions of the equation . Both of these methods are based on approximating the function by secant lines just as Newton's method was based on approximating the function by tangent lines.    The Secant Method  The secant method requires two initial approximations and , preferably both reasonably close to the solution . From and we can determine that the points and both lie on the graph of . Connecting these points gives the (secant) line Since we want , we set , solve for , and use that as our next approximation. Repeating this process gives us the iteration with . See for an illustration.    Schematic of the secant method.   The secant method in the case where the root is bracketed.   For example, suppose , which has a solution . Choose and as initial approximations. Next we have that and . We may then calculate from the formula : Pluggin into we obtain . In the next step we would use and in the formula to find and so on.  Below is a program for the secant method. Notice that it requires two input guesses and , but it does not require the derivative to be input.  mysecant   function x = mysecant(f,x0,x1,n) % Solves f(x) = 0 by doing n steps of the secant method % starting with x0 and x1. % Inputs: f -- the function % x0 -- starting guess, a number % x1 -- second starting guess % n -- the number of steps to do % Output: x -- the approximate solution y0 = f(x0); y1 = f(x1); for i = 1:n % Do n times x = x1 - (x1-x0)*y1\/(y1-y0) % secant formula. y=f(x) % y value at the new approximate solution. % Move numbers to get ready for the next step x0=x1; y0=y1; x1=x; y1=y; end end       The Regula Falsi (False Position) Method  The Regula Falsi method is a combination of the secant method and bisection method. As in the bisection method, we have to start with two approximations and for which and have different signs. As in the secant method, we follow the secant line to get a new approximation, which gives a formula similar to , Then, as in the bisection method, we check the sign of ; if it is the same as the sign of then becomes the new and otherwise let becomes the new . Note that in general either or but not both, so . For example, for the function in , but would never move.    Convergence  If we can begin with a good choice , then Newton's method will converge to rapidly. The secant method is a little slower than Newton's method and the Regula Falsi method is slightly slower than that. However, both are still much faster than the bisection method.  If we do not have a good starting point or interval, then the secant method, just like Newton's method, can fail altogether. The Regula Falsi method, just like the bisection method, always works because it keeps the solution inside a definite interval.    Simulations and Experiments  Although Newton's method converges faster than any other method, there are contexts when it is not convenient, or even impossible. One obvious situation is when it is difficult to calculate a formula for even though one knows the formula for . This is often the case when is not defined explicitly, but implicitly. There are other situations, which are very common in engineering and science, where even a formula for is not known. This happens when is the result of experiment or simulation rather than a formula. In such situations, the secant method is usually the best choice.     Perform 3 iterations of the secant method on the function , with starting points and . (By hand, but use a calculator.) Calculate the errors and percentage errors of , , and . Compare the errors with those in and     Create and graph the function g = @(x) log(x)+x.^2 . In the plot window, use the Tools menu to zoom in on the root (there is only one) to 2 decimal places. From this determine good starting points a0 and b0 and use the program mysecant.m ( ) to approximate the root to 15 decimal places. Turn in your zoomed-in plot and your approximation.    Modify the program mysecant.m ( ) to iterate until the absolute value of the residual is less than a given tolerance. (Let tol be an input instead of n .) Modify the comments appropriately. Test program on the two functions in the exercises above with tol  . Turn in the results and the program.    "
},
{
  "id": "fig-secant",
  "level": "2",
  "url": "sec-secant.html#fig-secant",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": "  Schematic of the secant method.   The secant method in the case where the root is bracketed.  "
},
{
  "id": "prg-mysecant",
  "level": "2",
  "url": "sec-secant.html#prg-mysecant",
  "type": "Program",
  "number": "1.6.2",
  "title": "mysecant",
  "body": " mysecant   function x = mysecant(f,x0,x1,n) % Solves f(x) = 0 by doing n steps of the secant method % starting with x0 and x1. % Inputs: f -- the function % x0 -- starting guess, a number % x1 -- second starting guess % n -- the number of steps to do % Output: x -- the approximate solution y0 = f(x0); y1 = f(x1); for i = 1:n % Do n times x = x1 - (x1-x0)*y1\/(y1-y0) % secant formula. y=f(x) % y value at the new approximate solution. % Move numbers to get ready for the next step x0=x1; y0=y1; x1=x; y1=y; end end   "
},
{
  "id": "exercises-secant-1",
  "level": "2",
  "url": "sec-secant.html#exercises-secant-1",
  "type": "Exercise",
  "number": "1.6.5.1",
  "title": "",
  "body": " Perform 3 iterations of the secant method on the function , with starting points and . (By hand, but use a calculator.) Calculate the errors and percentage errors of , , and . Compare the errors with those in and   "
},
{
  "id": "exercises-secant-2",
  "level": "2",
  "url": "sec-secant.html#exercises-secant-2",
  "type": "Exercise",
  "number": "1.6.5.2",
  "title": "",
  "body": " Create and graph the function g = @(x) log(x)+x.^2 . In the plot window, use the Tools menu to zoom in on the root (there is only one) to 2 decimal places. From this determine good starting points a0 and b0 and use the program mysecant.m ( ) to approximate the root to 15 decimal places. Turn in your zoomed-in plot and your approximation.  "
},
{
  "id": "exercises-secant-3",
  "level": "2",
  "url": "sec-secant.html#exercises-secant-3",
  "type": "Exercise",
  "number": "1.6.5.3",
  "title": "",
  "body": " Modify the program mysecant.m ( ) to iterate until the absolute value of the residual is less than a given tolerance. (Let tol be an input instead of n .) Modify the comments appropriately. Test program on the two functions in the exercises above with tol  . Turn in the results and the program.  "
},
{
  "id": "sec-symbolic",
  "level": "1",
  "url": "sec-symbolic.html",
  "type": "Section",
  "number": "1.7",
  "title": "Symbolic Computations",
  "body": " Symbolic Computations   The focus of this course is on numerical computations, i.e. calculations, usually approximations, with floating point numbers. However, MATLAB can also do symbolic computations, which means exact calculations using symbols as in Algebra or Calculus.  Note: To do symbolic computations in MATLAB one must have the Symbolic Toolbox.    Defining functions and basic operations  Before doing any symbolic computation, one must declare the variables used to be symbolic:  syms x y  An expression representing a function may be defined by simply typing the formula:  f = cos(x) + 3*x^2  Note that coefficients must be multiplied using * . To find specific values, you must use the command subs :  subs(f,pi)  This command stands for substitute, it substitutes for in the formula for .If we define another function:  g = exp(-y^2)  then we can compose the functions:  h = compose(g,f)  i.e. . We can also form new functions by multiplying:  yg = y*g  We can do simple calculus operations, like differentiation:  f1 = diff(f)  h1 = diff(h)  indefinite integrals (antiderivatives):  F = int(f)  and definite integrals:  int(f,0,2*pi)  To change a symbolic answer into a numerical answer, use the double command, which stands for double precision (not times 2):  double(ans)  Note that some antiderivatives cannot be found in terms of elementary functions; for some of these the antiderivative can be expressed in terms of special functions:  G = int(g)  and for others MATLAB does the best it can:  int(h)  For definite integrals that cannot be evaluated exactly, MATLAB does nothing and prints a warning:  int(h,0,1)  We will see later that even functions that don't have an antiderivative can be integrated numerically. You can change the last answer to a numerical answer using:  double(ans)  Plotting a symbolic function can be done as follows:  fplot(f)  or the domain can be specified:  fplot(g,[-10,10])  fplot(g,[-2,2])  It is important to keep in mind that even though we have defined our variables to be symbolic variables, plotting can only plot a finite set of points. For intance:  fplot(cos(x^5))  will produce a plot with some small mistakes, because it does not plot enough points.    Functions of Two Variables and Partial Derivatives  Since and are functions of different variables, their product is a function of two variables: In MATLAB, set  k = f*g  To evaluate, we need to specify which value goes in which variable:  subs(k,[x,y],[0,1])  To plot a symbolic function of two variables use:  ezsurf(k)  If we want to differentiate a function with more than one variable in MATLAB, we must specify which variable we are differentiating with respect to:  k1x = diff(k,x)  Here we have differentiated with respect to . This is called the partial derivative with respect to and we use the symbol to denote it. There is also a partial derivative with respect to , i.e. :  k1y = diff(k,y)  To calculate a partial derivative by hand you differentiate as normal with respect to one variable, but treat the other variables as if they were constants. For example if , then     Other useful symbolic operations  MATLAB allows you to do simple algebra. For instance:  poly = (x - 3)^5  polyex = expand(poly)  polysi = simplify(polyex)  To find the symbolic solutions of an equation, , use:  solve(f)  solve(g)  solve(polyex)  Another useful property of symbolic functions is that you can substitute numerical vectors for the variables:  X = 2:0.1:4;  Y = subs(polyex,X);  plot(X,Y)      New Notation  MATLAB recently expanded it notation for symbolic computations:  syms x  f(x) = x^2;  f(2)  The function must be given as . If given as this will not work. Then we have to use  subs(f,2)  It works for multivariable functions also:  syms x y a b  f(x,y) = x + 2*y;  f(a,b)       Starting from mynewton ( ) write a well-commented function program mysymnewton that takes as its input a symbolic function and the ordinary variables and . Let the program take the symbolic derivative . You will need to use the command subs to obtain values of and . Test it on starting with . Turn in the program and a brief summary of the results.    Find a complicated function in an engineering or science textbook or website. Make a well-commented script program that defines a symbolic version of this function and takes its derivative and indefinite integral symbolically (if possible). Plot the function on the domain that is relevant for the application. In the comments of the script describe what the function is and properly reference where you got it. Turn in your script and the plot.    Calculate all the partial derivative for the functions below. Do them by hand, then check them using the symbolic toolbox.            "
},
{
  "id": "exercises-symbolic-1",
  "level": "2",
  "url": "sec-symbolic.html#exercises-symbolic-1",
  "type": "Exercise",
  "number": "1.7.5.1",
  "title": "",
  "body": " Starting from mynewton ( ) write a well-commented function program mysymnewton that takes as its input a symbolic function and the ordinary variables and . Let the program take the symbolic derivative . You will need to use the command subs to obtain values of and . Test it on starting with . Turn in the program and a brief summary of the results.  "
},
{
  "id": "exercises-symbolic-2",
  "level": "2",
  "url": "sec-symbolic.html#exercises-symbolic-2",
  "type": "Exercise",
  "number": "1.7.5.2",
  "title": "",
  "body": " Find a complicated function in an engineering or science textbook or website. Make a well-commented script program that defines a symbolic version of this function and takes its derivative and indefinite integral symbolically (if possible). Plot the function on the domain that is relevant for the application. In the comments of the script describe what the function is and properly reference where you got it. Turn in your script and the plot.  "
},
{
  "id": "exercises-symbolic-3",
  "level": "2",
  "url": "sec-symbolic.html#exercises-symbolic-3",
  "type": "Exercise",
  "number": "1.7.5.3",
  "title": "",
  "body": " Calculate all the partial derivative for the functions below. Do them by hand, then check them using the symbolic toolbox.          "
},
{
  "id": "sec-chp1-review",
  "level": "1",
  "url": "sec-chp1-review.html",
  "type": "Section",
  "number": "1.8",
  "title": "Review of Chapter 1",
  "body": " Review of Chapter 1   Methods and Formulas   Solving equations numerically:      an equation we wish to solve.     a true solution.     starting approximation.     approximation after steps.     error of -th step.     residual at step . Often is sufficient.       Newton's method:     Bisection method:   and must have different signs. Choose or , depending on signs. is always inside . , current maximum error.    Secant method:     Regula Falsi  Is a hybrid between secant and bisection methods. Choose or , depending on signs.    Convergence:  Bisection is very slow. Newton is very fast. Secant methods are intermediate in speed. Bisection and Regula Falsi never fail to converge. Newton and Secant can fail if is not close to .    Locating roots:  Use knowledge of the problem to begin with a reasonable domain. Systematically search for sign changes of . Choose between sign changes using bisection or secant.    Usage:  For Newton's method one must have formulas for and . Secant methods are better for experiments and simulations. Bisection and Regula Falsi are slower, but keep the root within the current bounds.     MATLAB   Commands:     v = [0 1 2 3]   Make a row vector.    u = [0; 1; 2; 3]   Make a column vector.    w = v'   Transpose: row vector column vector    x = linspace(0,1,11)   Make an evenly spaced vector of length 11.    x = -1:.1:1   Make an evenly spaced vector, with increments .    y = x.^2   Square all entries.    plot(x,y)   plot y versus x.    f = @(x) 2*x.^2 - 3*x + 1   Make an anonymous function.    y = f(x)   A function can act on a vector.    plot(x,y,'*','red')   A plot with options.    Control-c  Stops a computation.       Program structures:   for ... end example:  for i=1:20 S = S + i; end   if ... end example:  if y == 0 disp('An exact solution has been found') end   while ... end example:  while i <= 20 S = S + i; i = i + 1; end   if ... else ... end example:  if c*y>0 a = x; else b = x; end      Function Programs:     Begin with the word function .    There are inputs and outputs.    The outputs, name of the function and the inputs must appear in the first line. i.e. function x = mynewton(f,x0,n)     The body of the program must assign values to the outputs.    Internal variables are not visible outside the function.    A function program may not use variables in the current workspace unless they are inputs.       Script Programs:     There are no inputs and outputs.    A script program may use, create, change and even delete variables in the current workspace.       Symbolic:    syms x y  f = 2*x^2 - sqrt(3*x)  subs(f,sym(pi))  double(ans)  g = log(abs(y)) MATLAB uses log for natural logarithm.  h(x) = compose(g,f)  k(x,y) = f*g  fplot(f)  fplot(g,-10,10)  ezsurf(k)  f1 = diff(f,'x')  F = int(f,'x') indefinite integral (antiderivative)  int(f,0,2*pi)  definite integral  poly = x*(x - 3)*(x-2)*(x-1)*(x+1)  polyex = expand(poly)  polysi = simple(polyex)  solve(f)  solve(g)  solve(polyex)     "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrices and Matrix Operations in MATLAB",
  "body": " Matrices and Matrix Operations in MATLAB   You should review the vector operations in .    Matrix operations  Recall how to multiply a matrix times a vector : . This is a special case of matrix multiplication. To multiply two matrices, and you proceed as follows: . Here both and are matrices. Matrices can be multiplied together in this way provided that the number of columns of match the number of rows of . We always list the size of a matrix by rows, then columns, so a matrix would have 3 rows and 5 columns. So, if is and is , then we can multiply if and only if . A column vector can be thought of as a matrix and a row vector as a matrix. Unless otherwise specified we will assume a vector to be a column vector and so makes sense as long as the number of columns of matches the number of entries in .  Printing matrices on the screen takes up a lot of space, so you may want to use format compact Enter a matrix into MATLAB either as A = [ 1 3 -2 5 ; -1 -1 5 4 ; 0 1 -9 0] or A = [1,3,-2,5; -1,-1,5,4; 0,1,-9,0] Also enter a vector : u = [ 1 2 3 4]' To multiply a matrix times a vector use * : A*u Since is 3 by 4 and is 4 by 1 this multiplication is valid and the result is a 3 by 1 vector.  Now enter another matrix using B = [3 2 1; 7 6 5; 4 3 2] You can multiply times with B*A but times is not defined and A*B will result in an error message.  You can multiply a matrix by a scalar: 2*A Adding matrices will give the same result: A + A You can even add a number to a matrix: A + 3 % add 3 to every entry of A     Component-wise operations  Just as for vectors, adding a . before * , \/ , or ^ produces entry-wise multiplication, division and exponentiation. If you enter B*B the result will be , i.e. matrix multiplication of times itself. But, if you enter B.*B the entries of the resulting matrix will contain the squares of the same entries of . Similarly if you want multiplied by itself 3 times then enter B^3 but, if you want to cube all the entries of B then enter B.^3 Note that B*B and B^3 only make sense if is square, but B.*B and B.^3 make sense for any size matrix.    The identity matrix and the inverse of a matrix  The identity matrix is a square matrix with ones on the diagonal and zeros everywhere else. It is called the identity because it plays the same role that plays in multiplication, i.e. for any matrix or vector where the sizes match. An identity matrix in MATLAB is produced by the command I = eye(3)   A square matrix can have an inverse which is denoted by . The definition of the inverse is that . In theory an inverse is very important, because if you have an equation where and are known and is unknown (as we will see, such problems are very common and important) then the theoretical solution is . We will see later that this is not a practical way to solve an equation, and is only important for the purpose of derivations.In MATLAB we can calculate a matrix's inverse very conveniently:  C = randn(5,5)  inv(C)  However, not all square matrices have inverses:  D = ones(5,5)  inv(D)      The Norm of a matrix  For a vector, the norm means the same thing as the length (geometrically, not the number of entries). Another way to think of it is how far the vector is from being the zero vector. We want to measure a matrix in much the same way and the norm is such a quantity. The usual definition of the norm of a matrix is    Suppose is a matrix. The norm of is .    The maximum in the definition is taken over all vectors with length (unit vectors), so the definition means the largest factor that the matrix stretches (or shrinks) a unit vector. This definition seems cumbersome at first, but it turns out to be the best one. For example, with this definition we have the following inequality for any vector : . In MATLAB the norm of a matrix is obtained by the command norm(A) For instance the norm of an identity matrix is : norm(eye(100)) and the norm of a zero matrix is : norm(zeros(50,50))   For a matrix the norm defined above and calculated by MATLAB is not the square root of the sum of the square of its entries. That quantity is called the Froebenius norm, which is also sometimes useful, but we will not need it.    Some other useful commands     C = rand(5,5)  random matrix with uniform distribution in .    size(C)  gives the dimensions ( ) of .    det(C)  the determinant of the matrix.    max(C)  the maximum of each column.    min(C)  the minimum in each column.    sum(C)  sums each column.    mean(C)  the average of each column.    diag(C)  just the diagonal elements.    C'  tranpose the matrix.     In addition to ones , eye , zeros , rand and randn , MATLAB has several other commands that automatically produce special matrices: hilb(6)  pascal(5)      Enter the matrix by A = [3 2 1; 6 5 4; 9 8 7] and also the matrix . Find  A*A  A^2  A.^2  A.*B  A*B  Turn in the output.    By hand, calculate , , and for: . Check the results using MATLAB. Think about how fast computers are. Turn in your hand work.    Write a well-commented MATLAB function program myinvcheck that   makes a random matrix (normally distributed, A = randn(n,n) ),    calculates its inverse ( B = inv(A) ),    multiplies the two back together,    calculates the residual (difference between and eye(n) ), and    returns the scalar residual (norm of the difference).   Turn in your program.    Write a well-commented MATLAB script program myinvcheckplot that calls myinvcheck for for as large as possible, records the results of each trial, and plots the scalar residual versus n using a log plot. (See help loglog .)  What happens to the scalar residual as gets big? Turn in the program, the plot, and a very brief report on the results of your experiments. (Do not print any large random matrices.)    "
},
{
  "id": "sec-matrices-6-3",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-6-3",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose is a matrix. The norm of is .   "
},
{
  "id": "exercises-matrices-1",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-1",
  "type": "Exercise",
  "number": "2.1.6.1",
  "title": "",
  "body": " Enter the matrix by A = [3 2 1; 6 5 4; 9 8 7] and also the matrix . Find  A*A  A^2  A.^2  A.*B  A*B  Turn in the output.  "
},
{
  "id": "exercises-matrices-2",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-2",
  "type": "Exercise",
  "number": "2.1.6.2",
  "title": "",
  "body": " By hand, calculate , , and for: . Check the results using MATLAB. Think about how fast computers are. Turn in your hand work.  "
},
{
  "id": "exercises-matrices-3",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-3",
  "type": "Exercise",
  "number": "2.1.6.3",
  "title": "",
  "body": " Write a well-commented MATLAB function program myinvcheck that   makes a random matrix (normally distributed, A = randn(n,n) ),    calculates its inverse ( B = inv(A) ),    multiplies the two back together,    calculates the residual (difference between and eye(n) ), and    returns the scalar residual (norm of the difference).   Turn in your program.  "
},
{
  "id": "exercises-matrices-4",
  "level": "2",
  "url": "sec-matrices.html#exercises-matrices-4",
  "type": "Exercise",
  "number": "2.1.6.4",
  "title": "",
  "body": " Write a well-commented MATLAB script program myinvcheckplot that calls myinvcheck for for as large as possible, records the results of each trial, and plots the scalar residual versus n using a log plot. (See help loglog .)  What happens to the scalar residual as gets big? Turn in the program, the plot, and a very brief report on the results of your experiments. (Do not print any large random matrices.)  "
},
{
  "id": "sec-intro_linsys",
  "level": "1",
  "url": "sec-intro_linsys.html",
  "type": "Section",
  "number": "2.2",
  "title": "Introduction to Linear Systems",
  "body": " Introduction to Linear Systems   How linear systems occur  Linear systems of equations naturally occur in many places in engineering, such as structural analysis, dynamics and electric circuits. Computers have made it possible to quickly and accurately solve larger and larger systems of equations. Not only has this allowed engineers to handle more and more complex problems where linear systems naturally occur, but has also prompted engineers to use linear systems to solve problems where they do not naturally occur such as thermodynamics, internal stress-strain analysis, fluids and chemical processes. It has become standard practice in many areas to analyze a problem by transforming it into a linear systems of equations and then solving those equation by computer. In this way, computers have made linear systems of equations the most frequently used tool in modern engineering.  In we show a truss with equilateral triangles. In Statics you may use the method of joints to write equations for each node of the truss See http:\/\/en.wikipedia.org\/wiki\/Truss or http:\/\/en.wikibooks.org\/wiki\/Statics for reference. . This set of equations is an example of a linear system. Making the approximation , the equations for this truss are where represents the tension in the -th member of the truss.    Diagram of an equilateral truss.   An equilateral truss. Joints or nodes are labeled alphabetically, , , and Members (edges) are labeled numerically: , , . The forces and are applied loads and , and are reaction forces applied by the supports.   You could solve this system by hand with a little time and patience; systematically eliminating variables and substituting. Obviously, it would be a lot better to put the equations on a computer and let the computer solve it. In the next few sections we will learn how to use a computer effectively to solve linear systems. The first key to dealing with linear systems is to realize that they are equivalent to matrices, which contain numbers, not variables.  As we discuss various aspects of matrices, we wish to keep in mind that the matrices that come up in engineering systems are really large. It is not unusual in real engineering to use matrices whose dimensions are in the thousands! It is frequently the case that a method that is fine for a or matrix is totally inappropriate for a matrix. We thus want to emphasize methods that work for large matrices.    Linear systems are equivalent to matrix equations  The system of linear equations is equivalent to the matrix equation , which is equivalent to the augmented matrix . The advantage of the augmented matrix, is that it contains only numbers, not variables. The reason this is better is because computers are much better in dealing with numbers than variables. To solve this system, the main steps are called Gaussian elimination and back substitution.  The augmented matrix for the equilateral truss equations is given by . Notice that a lot of the entries are . Matrices like this, called sparse, are common in applications and there are methods specifically designed to efficiently handle sparse matrices.    Triangular matrices and back substitution  Consider a linear system whose augmented matrix happens to be . Recall that each row represents an equation and each column a variable. The last row represents the equation . The equation is easily solved, i.e. . The second row represents the equation , but since we know , this simplifies to: . This is easily solved, giving . Finally, since we know and , the first row simplifies to: . Thus we have and so we know the whole solution vector: . The process we just did is called back substitution, which is both efficient and easily programmed. The property that made it possible to solve the system so easily is that in this case is upper triangular. In the next section we show an efficient way to transform an augmented matrix into an upper triangular matrix.    Gaussian Elimination  Consider the matrix . The first step of Gaussian elimination is to get rid of the 2 in the (2,1) position by subtracting times the first row from the second row, i.e. (new 2nd = old 2nd - (2) 1st) . We can do this because it is essentially the same as adding equations, which is a valid algebraic operation. This leads to . There is already a zero in the lower left corner, so we don't need to eliminate anything there. To eliminate the third row, second column, we need to subtract times the second row from the third row, (new 3rd = old 3rd - (-2) 2nd) , to obtain . This is now just exactly the matrix in equation , which we can now solve by back substitution.    MATLAB's matrix solve command  In MATLAB the standard way to solve a system is by the command x = A \\ b This syntax is meant to suggest dividing by from the left as in . Such division is not meaningful mathematically, but it helps for remembering the syntax.  This command carries out Gaussian elimination and back substitution. We can do the above computations as follows: A = [1 -2 3 ; 2 -5 12 ; 0 2 -10] b = [4 15 -10]' x = A b   Next, use the MATLAB commands above to solve when the augmented matrix for the system is , by entering x1 = A b Check the result by entering A*x1 - b You will see that the resulting answer satisfies the equation exactly. Next try solving using the inverse of : x2 = inv(A)*b This answer can be seen to be inaccurate by checking A*x2 - b Thus we see one of the reasons why the inverse is never used for actual computations, only for theory.     Set and in the equations for the equailateral truss. Input the coefficient matrix and the right hand side vector in into MATLAB. Solve the system using the command \\ to find the tension in each member of the truss. Save the matrix as A_equil_truss and keep it for later use. (Enter save A_equil_truss A .) Print out and turn in , and the solution .    Write each system of equations as an augmented matrix. By hand, find the solutions using Gaussian elimination and back substitution (i.e. the exact algorithm in this section). Check your solutions using MATLAB.            "
},
{
  "id": "fig-equilateral_truss",
  "level": "2",
  "url": "sec-intro_linsys.html#fig-equilateral_truss",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "  Diagram of an equilateral truss.   An equilateral truss. Joints or nodes are labeled alphabetically, , , and Members (edges) are labeled numerically: , , . The forces and are applied loads and , and are reaction forces applied by the supports.  "
},
{
  "id": "exercises-intro_linsys-1",
  "level": "2",
  "url": "sec-intro_linsys.html#exercises-intro_linsys-1",
  "type": "Exercise",
  "number": "2.2.6.1",
  "title": "",
  "body": " Set and in the equations for the equailateral truss. Input the coefficient matrix and the right hand side vector in into MATLAB. Solve the system using the command \\ to find the tension in each member of the truss. Save the matrix as A_equil_truss and keep it for later use. (Enter save A_equil_truss A .) Print out and turn in , and the solution .  "
},
{
  "id": "exercises-intro_linsys-2",
  "level": "2",
  "url": "sec-intro_linsys.html#exercises-intro_linsys-2",
  "type": "Exercise",
  "number": "2.2.6.2",
  "title": "",
  "body": " Write each system of equations as an augmented matrix. By hand, find the solutions using Gaussian elimination and back substitution (i.e. the exact algorithm in this section). Check your solutions using MATLAB.          "
},
{
  "id": "sec-lineartheory",
  "level": "1",
  "url": "sec-lineartheory.html",
  "type": "Section",
  "number": "2.3",
  "title": "Some Facts About Linear Systems",
  "body": " Some Facts About Linear Systems   Some inconvenient truths  In the last section we learned how to solve a linear system using MATLAB. Input the following:  A = ones(4,4)  b = randn(4,1)  x = A b    As you will find, there is no solution to the equation . This unfortunate circumstance is mostly the fault of the matrix, , which is too simple, its columns (and rows) are all the same. Now try  b = ones(4,1)  x = [ 1 0 0 0]'  A*x  So the system does have a solution. Still unfortunately, that is not the only solution. Try  x = [ 0 1 0 0]'  A*x  We see that this is also a solution. Next try  x = [ -4 5 2.27 -2.27]'  A*x  This is a solution! It is not hard to see that there are endless possibilities for solutions of this equation.    Basic theory  The most basic theoretical fact about linear systems is    A linear system may have 0, 1, or infinitely many solutions.    In most (but not all!) engineering applications we would want to have exactly one solution. The following two theorems tell us exactly when we can and cannot expect this.    Suppose is a square ( ) matrix. The following are all equivalent:   The equation has exactly one solution for any .     .     has an inverse.    The only solution of is .    The columns of are linearly independent (as vectors).    The rows of are linearly independent.   If has these properties then it is called non-singular .    On the other hand, a matrix that does not have these properties is called singular .    Suppose is a square matrix. The following are all equivalent:   The equation has 0 or many solutions depending on .     .     does not have an inverse.    The equation has solutions other than .    The columns of are linearly dependent as vectors.    The rows of are linearly dependent.       To see how the two theorems work, define two matrices (type in A1 then scroll up and modify to make A2 ) : , and two vectors: . First calculate the determinants of the matrices:  det(A1)  det(A2)  Then attempt to find the inverses:  inv(A1)  inv(A2)  Which matrix is singular and which is non-singular? Finally, attempt to solve all the possible equations :  x = A1 \\ b1  x = A1 \\ b2  x = A2 \\ b1  x = A2 \\ b2  As you can see, equations involving the non-singular matrix have one and only one solution, but equation involving a singular matrix are more complicated.    The Residual  Recall that the residual for an approximate solution of an equation is defined as . It is a measure of how close the equation is to being satisfied. For a linear system of equations we define the residual vector of an approximate solution by . If the solution vector were exactly correct, then would be exactly the zero vector. The size (norm) of is an indication of how close we have come to solving . We will refer to this number as the scalar residual or just the residual of the approximation solution: .     By hand, find all the solutions (if any) of the following linear system using the augmented matrix and Gaussian elimination (following exactly the algorithm in the notes): Try solving this system in MATLAB using the command x = A \\ b . What happens? Turn in your hand work.       Write a well-commented MATLAB function program mysolvecheck with input a number n that makes a random matrix and a random vector , solves the linear system , calculates the scalar residual , and outputs that number as .    Write a well-commented MATLAB script program that calls mysolvecheck 10 times each for 5, 10, 20, 40, 80, and 160, then records and averages the results and makes a log-log plot of the average vs. . Once your program is running correctly, increase the maximum (by factors of ) until the program stops running within 5 minutes.   Turn in the plot and the two programs. (Do not print any large random matrices.)    "
},
{
  "id": "sec-lineartheory-3-3",
  "level": "2",
  "url": "sec-lineartheory.html#sec-lineartheory-3-3",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "",
  "body": "  A linear system may have 0, 1, or infinitely many solutions.   "
},
{
  "id": "sec-lineartheory-3-5",
  "level": "2",
  "url": "sec-lineartheory.html#sec-lineartheory-3-5",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  Suppose is a square ( ) matrix. The following are all equivalent:   The equation has exactly one solution for any .     .     has an inverse.    The only solution of is .    The columns of are linearly independent (as vectors).    The rows of are linearly independent.   If has these properties then it is called non-singular .   "
},
{
  "id": "def-singular",
  "level": "2",
  "url": "sec-lineartheory.html#def-singular",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Suppose is a square matrix. The following are all equivalent:   The equation has 0 or many solutions depending on .     .     does not have an inverse.    The equation has solutions other than .    The columns of are linearly dependent as vectors.    The rows of are linearly dependent.      "
},
{
  "id": "exercises-lineartheory-1",
  "level": "2",
  "url": "sec-lineartheory.html#exercises-lineartheory-1",
  "type": "Exercise",
  "number": "2.3.4.1",
  "title": "",
  "body": " By hand, find all the solutions (if any) of the following linear system using the augmented matrix and Gaussian elimination (following exactly the algorithm in the notes): Try solving this system in MATLAB using the command x = A \\ b . What happens? Turn in your hand work.  "
},
{
  "id": "exercises-lineartheory-2",
  "level": "2",
  "url": "sec-lineartheory.html#exercises-lineartheory-2",
  "type": "Exercise",
  "number": "2.3.4.2",
  "title": "",
  "body": "    Write a well-commented MATLAB function program mysolvecheck with input a number n that makes a random matrix and a random vector , solves the linear system , calculates the scalar residual , and outputs that number as .    Write a well-commented MATLAB script program that calls mysolvecheck 10 times each for 5, 10, 20, 40, 80, and 160, then records and averages the results and makes a log-log plot of the average vs. . Once your program is running correctly, increase the maximum (by factors of ) until the program stops running within 5 minutes.   Turn in the plot and the two programs. (Do not print any large random matrices.)  "
},
{
  "id": "sec-accuracy",
  "level": "1",
  "url": "sec-accuracy.html",
  "type": "Section",
  "number": "2.4",
  "title": "Accuracy, Condition Numbers and Pivoting",
  "body": " Accuracy, Condition Numbers and Pivoting   In this section we will discuss two separate issues of accuracy in solving linear systems. The first, pivoting, is a method that ensures that Gaussian elimination proceeds as accurately as possible. The second, condition number, is a measure of how bad a matrix is. We will see that if a matrix has a bad condition number, the solutions are unstable with respect to small changes in data.    The effect of rounding  All computers store numbers as finite strings of binary floating point digits (bits). This limits numbers to a fixed number of significant digits and implies that after even the most basic calculations, rounding must happen.  Consider the following exaggerated example. Suppose that our computer can only store 2 significant digits and it is asked to do Gaussian elimination on . Doing the elimination exactly would produce , but rounding to 2 digits, our computer would store this as . Backsolving this reduced system gives . This seems fine until you realize that backsolving the unrounded system gives .    Row Pivoting  A way to fix the problem is to use pivoting, which means to switch rows of the matrix. Since switching rows of the augmented matrix just corresponds to switching the order of the equations, no harm is done: . Exact elimination would produce . Storing this result with only 2 significant digits gives . Now backsolving produces , which is the true solution (rounded to 2 significant digits).  The reason this worked is because is bigger than . To pivot we switch rows so that the largest entry in a column is the one used to eliminate the others. In bigger matrices, after each column is completed, compare the diagonal element of the next column with all the entries below it. Switch it (and the entire row) with the one with greatest absolute value. For example in the following matrix, the first column is finished and before doing the second column, pivoting should occur since : . Pivoting the 2nd and 3rd rows would produce .    Condition number  In some systems, problems occur even without rounding. Consider the following augmented matrices: . Here we have the same , but two different input vectors: which are pretty close to one another. You would expect then that the solutions and would also be close. Notice that this matrix does not need pivoting. Eliminating exactly we get . Now solving we find which are not close at all despite the fact that we did the calculations exactly. This poses a new problem: some matrices are very sensitive to small changes in input data. The extent of this sensitivity is measured by the condition number . The definition of condition number is: consider all small changes and in and and the resulting change, , in the solution . Then . Put another way, changes in the input data get multiplied by the condition number to produce changes in the outputs. Thus a high condition number is bad. It implies that small errors in the input can cause large errors in the output.It is not obvious from our definition above, but one can prove that the condition number of a matrix is at least 1.  In MATLAB enter H = hilb(2) which should result in the matrix above. MATLAB produces the condition number of a matrix with the command cond(H) Thus for this matrix small errors in the input can get magnified by 19 in the output. Next try the matrix  A = [ 1.2969 0.8648 ; .2161 .1441]  cond(A)  For this matrix small errors in the input can get magnified by in the output! (We will see this happen in the exercise.) This is obviously not very good for engineering where all measurements, constants and inputs are approximate.  Is there a solution to the problem of bad condition numbers? Usually, bad condition numbers in engineering contexts result from poor design. So, the engineering solution to bad conditioning is redesign .  Finally, find the determinant of the matrix above: det(A) which will be small. If then the matrix is singular, which is bad because it implies there will not be a unique solution. The case here, , is also bad, because it means the matrix is almost singular. Although generally indicates that the condition number will be large, they are actually independent things. To see this, find the determinant and condition number of the matrix [1e-10,0;0,1e-10] and the matrix [1e+10,0;0,1e-10] .     Let .   Find the condition number, determinant and inverse of (using MATLAB).    Let be the matrix obtained from by rounding off to three decimal places ( ). Find the inverse of . How do and differ? Explain how this happened.    Set b1 = [1.2969; 0.2161] and do x = A \\ b1 . Repeat the process but with a vector b2 obtained from b1 by rounding off to three decimal places. Explain exactly what happened. Why was the first answer so simple? Why do the two answers differ by so much?       To see how to solve linear systems symbolically, try  B = [sin(sym(1)) sin(sym(2)); sin(sym(3)) sin(sym(4))]  c = [1; 2]  x = B \\ c  pretty(x)    Now input the matrix symbolically as above by wrapping each number in sym . Create a numerical version via Cn = double(Cs) and define the two vectors d1 = [4; 8] and d2 = [1; 1] . Solve the systems (as in the third line of code above) Cs*x = d1 , Cn*x = d1 , Cs*x = d2 , and Cn*x = d2 . Explain the results. Does the symbolic or non-symbolic way give more information?    "
},
{
  "id": "exercises-accuracy-1",
  "level": "2",
  "url": "sec-accuracy.html#exercises-accuracy-1",
  "type": "Exercise",
  "number": "2.4.4.1",
  "title": "",
  "body": " Let .   Find the condition number, determinant and inverse of (using MATLAB).    Let be the matrix obtained from by rounding off to three decimal places ( ). Find the inverse of . How do and differ? Explain how this happened.    Set b1 = [1.2969; 0.2161] and do x = A \\ b1 . Repeat the process but with a vector b2 obtained from b1 by rounding off to three decimal places. Explain exactly what happened. Why was the first answer so simple? Why do the two answers differ by so much?     "
},
{
  "id": "exercises-accuracy-2",
  "level": "2",
  "url": "sec-accuracy.html#exercises-accuracy-2",
  "type": "Exercise",
  "number": "2.4.4.2",
  "title": "",
  "body": " To see how to solve linear systems symbolically, try  B = [sin(sym(1)) sin(sym(2)); sin(sym(3)) sin(sym(4))]  c = [1; 2]  x = B \\ c  pretty(x)    Now input the matrix symbolically as above by wrapping each number in sym . Create a numerical version via Cn = double(Cs) and define the two vectors d1 = [4; 8] and d2 = [1; 1] . Solve the systems (as in the third line of code above) Cs*x = d1 , Cn*x = d1 , Cs*x = d2 , and Cn*x = d2 . Explain the results. Does the symbolic or non-symbolic way give more information?  "
},
{
  "id": "sec-LU",
  "level": "1",
  "url": "sec-LU.html",
  "type": "Section",
  "number": "2.5",
  "title": "LU Decomposition",
  "body": " LU Decomposition   In many applications where linear systems appear, one needs to solve for many different vectors . For instance, a structure must be tested under several different loads, not just one. As in the example of a truss , the loading in such a problem is usually represented by the vector . Gaussian elimination with pivoting is the most efficient and accurate way to solve a linear system. Most of the work in this method is spent on the matrix itself. If we need to solve several different systems with the same , and is big, then we would like to avoid repeating the steps of Gaussian elimination on for every different . This can be accomplished by the LU decomposition, which in effect records the steps of Gaussian elimination.    LU decomposition  The main idea of the LU decomposition is to record the steps used in Gaussian elimination on A in the places where the zero is produced. Consider the matrix . The first step of Gaussian elimination is to subtract times the first row from the second row. In order to record what we have done, we will put the multiplier, , into the place it was used to make a zero, i.e. the second row, first column. In order to make it clear that it is a record of the step and not an element of , we will put it in parentheses. This leads to . There is already a zero in the lower left corner, so we don't need to eliminate anything there. We record this fact with a . To eliminate the third row, second column, we need to subtract times the second row from the third row. Recording the in the spot it was used we have . Let be the upper triangular matrix produced, and let be the lower triangular matrix with the records and ones on the diagonal, i.e. , then we have the following wonderful property: . Thus we see that is actually the product of and . Here is lower triangular and is upper triangular. When a matrix can be written as a product of simpler matrices, we call that a decomposition of and this one we call the LU decomposition.    Using LU to solve equations  If we also include pivoting, then an LU decomposition for consists of three matrices , and such that . The pivot matrix is the identity matrix, with the same rows switched as the rows of are switched in the pivoting. For instance, , would be the pivot matrix if the second and third rows of are switched by pivoting. MATLAB will produce an decomposition with pivoting for a matrix with the command [L U P] = lu(A) where P is the pivot matrix. To use this information to solve we first pivot both sides by multiplying by the pivot matrix: . Substituting for we get Then we define , which is unknown since is unknown. Using forward-substitution, we can (easily) solve for and then using back-substitution we can (easily) solve for . In MATLAB this would work as follows:  A = rand(5,5)  [L U P] = lu(A)  b = rand(5,1)  d = P*b  y = L \\ d  x = U \\ y  rnorm = norm(A*x - b) % Check the result  We can then solve for any other without redoing the LU step. Repeat the sequence for a new right hand side: c = randn(5,1) ; you can start at the third line. While this may not seem like a big savings, it would be if were a large matrix from an actual application.  The LU decomposition is an example of Matrix Decomposition which means taking a general matrix and breaking it down into components with simpler properties. Here and are simpler because they are lower and upper triangular. There are many other matrix decompositions that are useful in various contexts. Some of the most useful of these are the QR decomposition, the Singular Value decomposition and Cholesky decomposition. Often a decomposition is associated with an algorithm, e.g., finding the LU decomposition is equivalent to completing Gaussian Elimination.     Solve the systems below by hand using Gaussian elimination and back substitution (exactly as above) on the augmented matrix. As a by-product, give the LU decomposition of A. Pivot wherever appropriate (the number being eliminated should be smaller than the number eliminating it). Check by hand that and and compare with MATLAB.                Finish the following MATLAB function program:  function [x1, r1, x2, r2] = mysolve(A,b) % Solves linear systems using the LU decomposition with pivoting % and also with the built-in solve function A\\b. % Inputs: A -- the matrix % b -- the right-hand vector % Outputs: x1 -- the solution using the LU method % r1 -- the scalar residual using the LU method % x2 -- the solution using the built-in method % r2 -- the scalar residual using the % built-in method  Using format long , test the program on both random matrices ( randn(n,n) ) and Hilbert matrices ( hilb(n) ) with large (as big as you can make it and the program still run). Print your program and summarize your observations. (Do not print any random matrices or vectors.)    "
},
{
  "id": "exercises-LU-1",
  "level": "2",
  "url": "sec-LU.html#exercises-LU-1",
  "type": "Exercise",
  "number": "2.5.3.1",
  "title": "",
  "body": " Solve the systems below by hand using Gaussian elimination and back substitution (exactly as above) on the augmented matrix. As a by-product, give the LU decomposition of A. Pivot wherever appropriate (the number being eliminated should be smaller than the number eliminating it). Check by hand that and and compare with MATLAB.              "
},
{
  "id": "exercises-LU-2",
  "level": "2",
  "url": "sec-LU.html#exercises-LU-2",
  "type": "Exercise",
  "number": "2.5.3.2",
  "title": "",
  "body": " Finish the following MATLAB function program:  function [x1, r1, x2, r2] = mysolve(A,b) % Solves linear systems using the LU decomposition with pivoting % and also with the built-in solve function A\\b. % Inputs: A -- the matrix % b -- the right-hand vector % Outputs: x1 -- the solution using the LU method % r1 -- the scalar residual using the LU method % x2 -- the solution using the built-in method % r2 -- the scalar residual using the % built-in method  Using format long , test the program on both random matrices ( randn(n,n) ) and Hilbert matrices ( hilb(n) ) with large (as big as you can make it and the program still run). Print your program and summarize your observations. (Do not print any random matrices or vectors.)  "
},
{
  "id": "sec-multnewton",
  "level": "1",
  "url": "sec-multnewton.html",
  "type": "Section",
  "number": "2.6",
  "title": "Nonlinear Systems - Newton’s Method",
  "body": " Nonlinear Systems - Newton's Method   An Example  The LORAN (LOng RAnge Navigation) system calculates the position of a boat at sea using signals from fixed transmitters. From the time differences of the incoming signals, the boat obtains differences of distances to the transmitters. This leads to two equations each representing hyperbolas defined by the differences of distance of two points (foci). An example of such equations E. Johnston, J. Mathews, Calculus, Addison-Wesley, 2001 are . Solving two quadratic equations with two unknowns would require solving a 4 degree polynomial equation. We could do this by hand, but for a navigational system to work well, it must do the calculations automatically and numerically. We note that the Global Positioning System (GPS) works on similar principles and must do similar computations.    Vector Notation  In general, we can usually find solutions to a system of equations when the number of unknowns matches the number of equations. Thus, we wish to find solutions to systems that have the form . For convenience we can think of as a vector and as a vector-valued function . With this notation, we can write the system of equations simply as , i.e. we wish to find a vector that makes the vector function equal to the zero vector.  As in Newton's method for one variable, we need to start with an initial guess . In theory, the more variables one has, the harder it is to find a good initial guess. In practice, this must be overcome by using physically reasonable assumptions about the possible values of a solution, i.e. take advantage of engineering knowledge of the problem.    Linear Approximation for Vector Functions  In the single variable case, Newton's method was derived by considering the linear approximation of the function at the initial guess . From Calculus, the following is the linear approximation of at , for vectors and vector-valued functions: . Here is an matrix whose entries are the various partial derivative of the components of , evaluated at . Specifically, .    Newton's Method  We wish to find that makes equal to the zero vectors, so let's choose so that . Since is a square matrix, we can solve this equation by , provided that the inverse exists. The formula is the vector equivalent of the Newton's method formula we learned before. However, in practice we never use the inverse of a matrix for computations, so we cannot use this formula directly. Rather, we can do the following. First solve the equation , where we want to have . Since is a known matrix and is a known vector, this equation is just a system of linear equations, which can be solved efficiently and accurately. Once we have the solution vector , we can obtain our improved estimate by .  For subsequent steps, we have the following process:   Solve for .    Let        An Experiment  We will solve the following set of equations: . You can easily check that is a solution of this system. By graphing both of the equations you can also see that is the only solution .    Solution curves of two nonlinear equations.   Graphs of the equations and . There is one and only one intersection; at .   We can put these equations into vector-function form by letting , and , or, equivalently, .  The partial derivatives are . Thus, . Now that we have the equations in vector-function form, we can write the following script program:  format long; f = @(x)[ x(1)^3+x(2)-1 ; x(2)^3-x(1)+1 ] x = [.5;.5] x = fsolve(f,x)  Save this program as myfsolve.m and run it. You will see that the internal MATLAB solving command fsolve approximates the solution, but only to about 7 decimal places. While that would be close enough for most applications, one would expect that we could do better on such a simple problem.  Next we will implement Newton's method for this problem. Modify your myfsolve program to:  % mymultnewton - solve an example nonlinear system format long; n=8 % set some number of iterations, may need adjusting f = @(x)[x(1)^3+x(2)-1 ; x(2)^3-x(1)+1] % the vector function % the matrix of partial derivatives Df = @(x)[3*x(1)^2, 1 ; -1, 3*x(2)^2] x = [.5;.5] % starting guess for i = 1:n Dx = -Df(x)\\f(x); % solve for increment x = x + Dx % add on to get new guess f(x) % see if f(x) is really zero end  Save and run this program (as mymultnewton ) and you will see that it finds the root exactly (to machine precision) in only 6 iterations. Why is this simple program able to do better than MATLAB's built-in program?        Put the LORAN equations into the function form .    Calculate (by hand) the partial derivatives of and construct the matrix (see and ).    Adapt the mymultnewton program to find a solution for these equations. By trying different starting vectors, find at least three different solutions. (There are actually four solutions.)    Think of at least one way that the navigational system could determine the correct solution.       "
},
{
  "id": "fig-nlsys",
  "level": "2",
  "url": "sec-multnewton.html#fig-nlsys",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": "  Solution curves of two nonlinear equations.   Graphs of the equations and . There is one and only one intersection; at .  "
},
{
  "id": "exercises-multnewton-1",
  "level": "2",
  "url": "sec-multnewton.html#exercises-multnewton-1",
  "type": "Exercise",
  "number": "2.6.6.1",
  "title": "",
  "body": "    Put the LORAN equations into the function form .    Calculate (by hand) the partial derivatives of and construct the matrix (see and ).    Adapt the mymultnewton program to find a solution for these equations. By trying different starting vectors, find at least three different solutions. (There are actually four solutions.)    Think of at least one way that the navigational system could determine the correct solution.     "
},
{
  "id": "sec-eigen",
  "level": "1",
  "url": "sec-eigen.html",
  "type": "Section",
  "number": "2.7",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   Suppose that is a square ( ) matrix. We say that a nonzero vector is an eigenvector and a number is its eigenvalue if . Geometrically this means that is in the same direction as , since multiplying a vector by a number changes its length, but not its direction.  MATLAB has a built-in routine for finding eigenvalues and eigenvectors:  A = pascal(4)  [v e] = eig(A)  The results are a matrix v that contains eigenvectors as columns and a diagonal matrix e that contains eigenvalues on the diagonal. We can check this by  v1 = v(:,1)  A*v1  e(1,1)*v1      Finding Eigenvalues for and  If is or then we can find its eigenvalues and eigenvectors by hand. Notice that Equation can be rewritten as . It would be nice to factor out the from the right-hand side of this equation, but we can't because is a matrix and is a number. However, since , we can do the following: If is nonzero, then by the matrix must be singular. By the same theorem, we must have . This is called the characteristic equation.  For a matrix, is calculated as in the following example: . The determinant of is then . The characteristic equation is simply a quadratic equation: . The roots of this equation are and . These are the eigenvalues of the matrix . Now to find the corresponding eigenvectors we return to the equation . For , the equation for the eigenvector is equivalent to the augmented matrix . Notice that the first and second rows of this matrix are multiples of one another. Thus Gaussian elimination would produce all zeros on the bottom row. Thus this equation has infinitely many solutions, i.e. infinitely many eigenvectors. Since only the direction of the eigenvector matters, this is okay, we only need to find one of the eigenvectors. Since the second row of the augmented matrix represents the equation , we can let . This comes from noticing that is a solution of .  For , is equivalent to the augmented matrix . Once again the first and second rows of this matrix are multiples of one another. For simplicity we can let .  One can always check an eigenvector and eigenvalue by multiplying: .  For a matrix we could complete the same process. The would be a cubic polynomial and we would expect to usually get 3 roots, which are the eigenvalues.    Larger Matrices  For a matrix with this process is too long and cumbersome to complete by hand. Further, this process is not well suited even to implementation on a computer program since it involves determinants and solving a -degree polynomial. For we need more ingenious methods. These methods rely on the geometric meaning of eigenvectors and eigenvalues rather than solving algebraic equations. We will overview these methods in .    Complex Eigenvalues  It turns out that the eigenvalues of some matrices are complex numbers, even when the matrix only contains real numbers. When this happens the complex eigenvalues must occur in conjugate pairs, i.e. . The corresponding eigenvectors must also come in conjugate pairs: . In applications, the imaginary part of the eigenvalue, , often is related to the frequency of an oscillation. This is because of Euler's formula .  Certain kinds of matrices that arise in applications can only have real eigenvalues and eigenvectors. The most common such type of matrix is the symmetric matrix. A matrix is symmetric if it is equal to its own transpose, i.e. it is symmetric across the diagonal. For example, is symmetric and so we know beforehand that its eigenvalues will be real, not complex.     Find the eigenvalues and eigenvectors of the following matrix by hand:     Find the eigenvalues and eigenvectors of the following matrix by hand: . Can you guess the eigenvalues of the matrix ?    "
},
{
  "id": "exercises-eign-1",
  "level": "2",
  "url": "sec-eigen.html#exercises-eign-1",
  "type": "Exercise",
  "number": "2.7.4.1",
  "title": "",
  "body": " Find the eigenvalues and eigenvectors of the following matrix by hand:   "
},
{
  "id": "exercises-eign-2",
  "level": "2",
  "url": "sec-eigen.html#exercises-eign-2",
  "type": "Exercise",
  "number": "2.7.4.2",
  "title": "",
  "body": " Find the eigenvalues and eigenvectors of the following matrix by hand: . Can you guess the eigenvalues of the matrix ?  "
},
{
  "id": "sec-vibration",
  "level": "1",
  "url": "sec-vibration.html",
  "type": "Section",
  "number": "2.8",
  "title": "An Application of Eigenvectors: Vibrational Modes and Frequencies",
  "body": " An Application of Eigenvectors: Vibrational Modes and Frequencies   One application of eigenvalues and eigenvectors is in the analysis of vibration problems. A simple nontrivial vibration problem is the motion of two objects with equal masses attached to each other and fixed outer walls by equal springs with spring constants , as shown in .    Diagram with wall - spring - mass - spring - mass - spring - wall.   Two equal masses attached to each other and fixed walls by equal springs.   Let denote the displacement of the first mass and the displacement of the second, and note the displacement of the walls is zero. Each mass experiences forces from the adjacent springs proportional to the stretch or compression of the spring. Ignoring any friction, Newton's law of motion , leads to . Dividing both sides by we can write these equations in matrix form , where .  For this type of equation, the general solution is where and are eigenvalues of with corresponding eigenvectors and . One can check that this is a solution by substituting it into the equation .  The eigenvalues of are the squares of the frequencies of oscillation. Let's set and in . We can find the eigenvalues and eigenvectors of using MATLAB:  A = [2 -1 ; -1 2]  [v e] = eig(A)  This should produce a matrix v whose columns are the eigenvectors of and a diagonal matrix whose entries are the eigenvalues of . In the first eigenvector, , the two entries are equal. This represents the mode of oscillation where the two masses move in sync with each other. The second eigenvector, , has the same entries but opposite signs. This represents the mode where the two masses oscillate in anti-synchronization. See . Notice that the frequency for anti-sync motion is times that of synchronous motion.    Diagram with vibrational modes for wall - spring - mass - spring - mass - spring - wall.   Two vibrational modes of a simple oscillating system. In the left mode the weights move together and in the right mode they move opposite. Note that the two modes actually move at different speeds.   Which of the two modes is the most dangerous for a structure or machine? It is the one with the lowest frequency because that mode can have the largest displacement. Sometimes this mode is called the fundamental mode.  We can do the same for three equal masses. With , the corresponding matrix would be . Find the eigenvectors and eigenvalues as above. There are three different modes. Interpret them from the eigenvectors.     Find the modes and their frequencies for 4 equal masses with kg and equal springs with N\/m. Describe the modes (a sketch will suffice).    Find the modes and their frequencies for three unequal masses kg, kg and kg connected by 4 equal springs with N\/m. How do unequal masses affect the modes? (You must start with the equations of motion to do this correctly.)    "
},
{
  "id": "fig-twosprings",
  "level": "2",
  "url": "sec-vibration.html#fig-twosprings",
  "type": "Figure",
  "number": "2.8.1",
  "title": "",
  "body": "  Diagram with wall - spring - mass - spring - mass - spring - wall.   Two equal masses attached to each other and fixed walls by equal springs.  "
},
{
  "id": "fig-twospringvectors",
  "level": "2",
  "url": "sec-vibration.html#fig-twospringvectors",
  "type": "Figure",
  "number": "2.8.2",
  "title": "",
  "body": "  Diagram with vibrational modes for wall - spring - mass - spring - mass - spring - wall.   Two vibrational modes of a simple oscillating system. In the left mode the weights move together and in the right mode they move opposite. Note that the two modes actually move at different speeds.  "
},
{
  "id": "exercises-vibration-1",
  "level": "2",
  "url": "sec-vibration.html#exercises-vibration-1",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": " Find the modes and their frequencies for 4 equal masses with kg and equal springs with N\/m. Describe the modes (a sketch will suffice).  "
},
{
  "id": "exercises-vibration-2",
  "level": "2",
  "url": "sec-vibration.html#exercises-vibration-2",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": " Find the modes and their frequencies for three unequal masses kg, kg and kg connected by 4 equal springs with N\/m. How do unequal masses affect the modes? (You must start with the equations of motion to do this correctly.)  "
},
{
  "id": "sec-EWmeth",
  "level": "1",
  "url": "sec-EWmeth.html",
  "type": "Section",
  "number": "2.9",
  "title": "Numerical Methods for Eigenvalues",
  "body": " Numerical Methods for Eigenvalues   As mentioned above, the eigenvalues and eigenvectors of an matrix where must be found numerically instead of by hand. The numerical methods that are used in practice depend on the geometric meaning of eigenvalues and eigenvectors which is equation . The essence of all these methods is captured in the Power method, which we now introduce.    The Power Method  In the command window of MATLAB enter  A = hilb(5)  x = ones(5,1)  x = A*x  el = max(x)  x = x\/el  Compare the new value of x with the original. Repeat the last three lines (you can use the scroll up button). Compare the newest value of x with the previous one and the original. Notice that there is less change between the second two. Repeat the last three commands over and over until the values stop changing. You have completed what is known as the Power Method. Now try the command [v e] = eig(A) The last entry in e should be the final el we computed. The last column in v is x\/norm(x) . Below we explain why our commands gave this eigenvalue and eigenvector.  For illustration consider a matrix whose eigenvalues are and and whose corresponding eigenvectors are and . Let be any vector which is a combination of and , e.g., . Now let be times . It follows from that . Thus the part is shrunk while the is stretched. If we repeat this process times then . Clearly, grows in the direction of and shrinks in the direction of . This is the principle of the Power Method, vectors multiplied by are stretched most in the direction of the eigenvector whose eigenvalue has the largest absolute value.  The eigenvalue with the largest absolute value is called the dominant eigenvalue. In many applications this quantity will necessarily be positive for physical reasons. When this is the case, the MATLAB code above will work since max(v) will be the element with the largest absolute value. In applications where the dominant eigenvalue may be negative, the program must use flow control to determine the correct number.  Summarizing the Power Method:   Repeatedly multiply by and divide by the element with the largest absolute value.    The element of largest absolute value converges to largest absolute eigenvalue.    The vector converges to the corresponding eigenvector.   Note that this logic only works when the eigenvalue largest in magnitude is real. If the matrix and starting vector are real then the power method can never give a result with an imaginary part. Eigenvalues with imaginary part mean the matrix has a rotational component, so the eigenvector would not settle down either.  Try  A = randn(15,15);  e = eig(A)  You can see that for a random square matrix, many of the eigenvalues are complex. However, matrices in applications are not just random. They have structure, and this can lead to real eigenvalues as seen in the next section.    Symmetric, Positive-Definite Matrices  As noted in the previous paragraph, the power method can fail if has complex eigenvalues. One class of matrices that appear often in applications and for which the eigenvalues are always real are called the symmetric matrices. A matrix is symmetric if , i.e. is symmetric with respect to reflections about its diagonal.  Try  A = rand(5,5)  C = A'*A  e = eig(C)  You can see that the eigenvalues of these symmetric matrices are real.  Next we consider an even more specialized class for which the eigenvalues are not only real, but positive. A symmetric matrix is called positive definite if for all vectors the following holds: . Geometrically, does not rotate any vector by more than . In summary:   If is symmetric then its eigenvalues are real.    If is symmetric positive definite, then its eigenvalues are positive numbers.     Notice that the matrices in the previous section were symmetric and the eigenvalues were all real. Notice that the Hilbert and Pascal matrices are symmetric.    The residual of an approximate eigenvector-eigenvalue pair  If and are an eigenvector-eigenvalue pair for , then they are supposed to satisfy the equations: . Thus a scalar residual for approximate and would be .    The Inverse Power Method  In the application of vibration analysis, the mode (eigenvector) with the lowest frequency (eigenvalue) is the most dangerous for the machine or structure. The Power Method gives us instead the largest eigenvalue, which is the least important frequency. In this section we introduce a method, the Inverse Power Method which produces exactly what is needed.  The following facts are at the heart of the Inverse Power Method:   If is an eigenvalue of then is an eigenvalue for .    The eigenvectors for and are the same.     Thus if we apply the Power Method to we will obtain the largest absolute eigenvalue of , which is exactly the reciprocal of the smallest absolute eigenvalue of . We will also obtain the corresponding eigenvector, which is an eigenvector for both and . Recall that in the application of vibration mode analysis, the smallest eigenvalue and its eigenvector correspond exactly to the frequency and mode that we are most interested in, i.e. the one that can do the most damage.  Here as always, we do not really want to calculate the inverse of directly if we can help it. Fortunately, multiplying by to get is equivalent to solving the system , which can be done efficiently and accurately. Since iterating this process involves solving a linear system with the same but many different right hand sides, it is a perfect time to use the LU decomposition to save computations. The following function program does steps of the Inverse Power Method.  function [x e] = myipm(A,n) % Performs the inverse power method. % Inputs: A -- a square matrix % n -- number of iterations. % Outputs: x -- estimated eigenvector % e -- estimated smallest eigenvalue. [L U P] = lu(A); % LU decomposition of A with pivoting m = size(A,1); % determine the size of A x = ones(m,1); % make an initial vector with ones for i = 1:n px = P*x; % Apply pivot y = L\\px; % solve via LU x = U\\y; % find the maximum entry in absolute value, retaining its sign M = max(x); m = min(x); if abs(M) >= abs(m) el = M; else el = m; end x = x\/el; % divide by the estimated eigenvalue of the inverse of A end e = 1\/el; % reciprocate to get an eigenvalue of A end  Create a Hilbert matrix and use the program to find its smallest eigenvalue and corresponding eigenvector. Also do [V, E] = eig(H) and compare.     For each of the matrices , perform two iterations of the power method by hand starting with a vector of all ones. State the resulting approximations of the eigenvalue and eigenvector.       Write a well-commented MATLAB function program mypm.m that inputs a matrix and a tolerance, applies the power method until the scalar residual is less than the tolerance, and outputs the estimated eigenvalue and eigenvector, the number of steps, and the scalar residual.    Test your program on the matrices and in the previous exercise and check that you get the same results as your hand calculations for the first 2 iterations. Turn in your program only.       "
},
{
  "id": "exercises-EWmeth-1",
  "level": "2",
  "url": "sec-EWmeth.html#exercises-EWmeth-1",
  "type": "Exercise",
  "number": "2.9.5.1",
  "title": "",
  "body": " For each of the matrices , perform two iterations of the power method by hand starting with a vector of all ones. State the resulting approximations of the eigenvalue and eigenvector.  "
},
{
  "id": "exercises-EWmeth-2",
  "level": "2",
  "url": "sec-EWmeth.html#exercises-EWmeth-2",
  "type": "Exercise",
  "number": "2.9.5.2",
  "title": "",
  "body": "    Write a well-commented MATLAB function program mypm.m that inputs a matrix and a tolerance, applies the power method until the scalar residual is less than the tolerance, and outputs the estimated eigenvalue and eigenvector, the number of steps, and the scalar residual.    Test your program on the matrices and in the previous exercise and check that you get the same results as your hand calculations for the first 2 iterations. Turn in your program only.     "
},
{
  "id": "sec-QR",
  "level": "1",
  "url": "sec-QR.html",
  "type": "Section",
  "number": "2.10",
  "title": "The QR Method*",
  "body": " The QR Method*   The Power Method and Inverse Power Method each give us only one eigenvalue-eigenvector pair. While both of these methods can be modified to give more eigenvalues and eigenvectors, there is a better method for obtaining all the eigenvalues called the QR method. This is the basis of all modern eigenvalue software, including MATLAB, so we summarize it briefly here.  The QR method uses the fact that any square matrix has a QR decomposition. That is, for any there are matrices and such the where has the property and is upper triangular. A matrix with the property that its transpose equals its inverse is called an orthogonal matrix, because its column vectors are mutually orthogonal.  The QR method consists of iterating following steps:   Transform into a tridiagonal matrix .    Decompose in .    Multiply and together in reverse order to form a new .   The diagonal of will converge to the eigenvalues.  The details of what makes this method converge are beyond the scope of the this book. However, we note the following theory behind it for those with more familiarity with linear algebra. First the Hessian matrix is obtained from by a series of similarity transformation, thus it has the same eigenvalues as . Secondly, if we denote by , , , , the sequence of matrices produced by the iteration, then . Thus each is a related to by an (orthogonal) similarity transformation and so they have the same eigenvalues as .  There is a built-in QR decomposition in MATLAB which is called with the command: [Q R] = qr(A) . Thus the following program implements QR method until it converges:  function [E,steps] = myqrmethod(A) % Computes all the eigenvalues of a matrix using the QR method. % Input: A -- square matrix % Outputs: E -- vector of eigenvalues % steps -- the number of iterations it took [m n] = size(A); if m ~= n warning('The input matrix is not square.') return end % Set up initial estimate H = hess(A); E = diag(H); change = 1; steps = 0; % loop while estimate changes while change > 0 Eold = E; % apply QR method [Q R] = qr(H); H = R*Q; E = diag(H); % test change change = norm(E - Eold); steps = steps +1; end end  As you can see the main steps of the program are very simple. The really hard calculations are contained in the built-in commands hess(A) and qr(H) .  Run this program and compare the results with MATLAB's built in command:  format long  format compact  A = hilb(5)  [Eqr,steps] = myqrmethod(A)  Eml = eig(A)  diff = norm(Eml - flipud(Eqr))       Modify myqrmethod to stop after 1000 iterations. Use the modified program on the matrix A = hilb(n) with n equal to 10, 50, and 200. Use the norm to compare the results to the eigenvalues obtained from MATLAB's built-in program eig . Turn in your program and a brief report on the experiment.    "
},
{
  "id": "exercises-QR-1",
  "level": "2",
  "url": "sec-QR.html#exercises-QR-1",
  "type": "Exercise",
  "number": "2.10.1",
  "title": "",
  "body": " Modify myqrmethod to stop after 1000 iterations. Use the modified program on the matrix A = hilb(n) with n equal to 10, 50, and 200. Use the norm to compare the results to the eigenvalues obtained from MATLAB's built-in program eig . Turn in your program and a brief report on the experiment.  "
},
{
  "id": "sec-chapter2-review",
  "level": "1",
  "url": "sec-chapter2-review.html",
  "type": "Section",
  "number": "2.11",
  "title": "Review of Chapter 2",
  "body": " Review of Chapter 2   Methods and Formulas   Basic Matrix Theory:     Identity matrix: , , and    Inverse matrix:  and    Norm of a matrix:     A matrix may be singular or nonsingular. See .    Solving Process:  Learn the exact Gaussian Elimination algorithm:  Row  Row - (ratio) Row  Gaussian Elimination this way produces LU decomposition  Row Pivoting (bigger absolute number on top).  Back Substitution.      Condition number:   A big condition number is bad; in engineering it usually results from poor design.    LU factorization:  The LU factorization is a by-product of Gaussian Elimination (if done with the correct algorithm). . Solving steps:   Multiply by P:     Forwardsolve:     Backsolve:        Eigenvalues and eigenvectors:  A nonzero vector is an eigenvector and a number is its eigenvalue if .   Characteristic equation:     Equation of the eigenvector:     Residual for an approximate eigenvector-eigenvalue pair:        Complex eigenvalues:  Occur in conjugate pairs: and eigenvectors must also come in conjugate pairs: .    Vibrational modes:  Eigenvalues are frequencies squared. Eigenvectors represent modes.    Power Method:     Repeatedly multiply by and divide by the element with the largest absolute value.    The element of largest absolute value converges to largest absolute eigenvalue.    The vector converges to the corresponding eigenvector.    Convergence assured for a real symmetric matrix, but not for an arbitrary matrix, which may not have real eigenvalues at all.       Inverse Power Method:     Apply power method to .    Use solving rather than the inverse.    If is an eigenvalue of then is an eigenvalue for .    The eigenvectors for and are the same.       Symmetric and Positive definite:     Symmetric: .    If is symmetric its eigenvalues are real.    Positive definite: .    If is positive definite, then its eigenvalues are positive.       QR method (Not covered in MATH 3600 at Ohio University):     Transform into the Hessian form of .    Decompose in .    Multiply and together in reverse order to form a new .    Repeat    The diagonal of will converge to the eigenvalues of .        MATLAB   Matrix arithmetic:     A = [ 1 3 -2 5 ; -1 -1 5 4 ; 0 1 -9 0] Manually enter a matrix.    u = [ 1 2 3 4]'    A*u    B = [3 2 1; 7 6 5; 4 3 2]    B*A multiply times .    2*A multiply a matrix by a scalar.    A + A add matrices.    A + 3 add 3 to every entry of a matrix.    B.*B component-wise multiplication.    B.^3 component-wise exponentiation.       Special matrices:     I = eye(3)  identity matrix    D = ones(5,5)    O = zeros(10,10)    C = rand(5,5)  random matrix with uniform distribution in .    C = randn(5,5)  random matrix with normal distribution.    hilb(6)    pascal(5)       General matrix commands:     size(C)  gives the dimensions ( ) of .    norm(C)  gives the norm of the matrix.    det(C)  the determinant of the matrix.    max(C)  the maximum of each row.    min(C)  the minimum in each row.    sum(C)  sums each row.    mean(C)  the average of each row.    diag(C)  just the diagonal elements.    inv(C)  inverse of the matrix.    C'  transpose of the matrix.       Matrix decompositions:     [L U P] = lu(C)    [Q R] = qr(C)     H = hess(C)  transform into a Hessian tri-diagonal matrix, which has the same eigenvalues as .       "
},
{
  "id": "sec-interpolation",
  "level": "1",
  "url": "sec-interpolation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Polynomial and Spline Interpolation",
  "body": " Polynomial and Spline Interpolation   A Chemical Reaction  In a chemical reaction the concentration level of the product at time was measured every half hour. The following results were found:     t  0  .5  1.0  1.5  2.0    y  0  .19  .26  .29  .31    We can input this data into MATLAB as  t1 = 0:.5:2  y1 = [ 0 .19 .26 .29 .31 ]  and plot the data with plot(t1,y1) MATLAB automatically connects the data with line segments, so the graph has corners.What if we want a smoother graph? Try plot(t1,y1,'*') which will produce just asterisks at the data points. Next click on Tools , then click on the Basic Fitting option. This should produce a small window with several fitting options. Begin clicking them one at a time, clicking them off before clicking the next. Which ones produce a good-looking fit? You should note that the spline, the shape-preserving interpolant, and the 4th degree polynomial produce very good curves. The others do not.    Polynomial Interpolation  Suppose we have data points . A interpolant is a function such that for .The most general polynomial with degree is , which has coefficients. A polynomial interpolant with degree thus must satisfy . This system is a linear system in the unknowns and solving linear systems is what computers do best. If , then the system of equations has equations and unknowns, so in general there is a unique solution. This is the case in the example above: there are 5 data points so there is exactly one 4th degree polynomial that interpolates the data.  If then the system is underdetermined and so in general will have an infinite number of solutions. When we tried to use a 5th or higher degree polynomial above, MATLAB returned a warning that the polynomial is not unique since degree number of data points .  If the data has repeated -values with distinct -values, then the system of equations is inconsistent and there will be no solution.If then the system has more equations than unknowns, so it is overdetermined and in general will have no solution.In these cases MATLAB does produce a function, but it does not satisfy for and so is not an interpolant. Instead it is a least-squares fit, which we will study in .    Predicting the future?  Suppose we want to use the data to extrapolate into the future. Set the plot to the 4th degree polynomial. Then click the Edit button and select the Axes Properties option. A box should appear that allows you to adjust the domain of the axes. Change the upper limit of the -axis from to . Based on the 4th degree polynomial, what will the chemical reaction do in the future? Is this reasonable?  Next change from 4th degree polynomial to spline interpolant. According to the spline, what will the chemical reaction do in the future? Try the shape-preserving interpolant also.  From our (limited) knowledge of chemical reactions, what should be the behavior as time goes on? It should reach a limiting value (chemical equilibrium). Could we use the data to predict this equilibrium value? Yes, we could and it is done all the time in many different contexts, but to do so we need to know that there is an equilibrium to predict. This requires that we understand the chemistry of the problem. Thus we have the following principle: To extrapolate beyond the data, one must have some knowledge of the process.    More data  Generally one would think that more data is better. Input the following data vectors:  t2 = [ 0 .1 .4 .5 .6 1.0 1.4 1.5 1.6 1.9 2.0]  y2 = [ 0 .06 .17 .19 .21 .26 .29 .29 .30 .31 .31]  There are 11 data points, so a 10-th degree polynomial will fit the data. However, this does not give a good graph. Thus: Polynomial interpolation is better for small data sets.     A challenging data set  Input the following data set:  x = -4:1:5  y = [ 0 0 0 1 1 1 0 0 0 0]  and plot it: plot(x,y,'*') There are 10 data points, so there is a unique 9 degree polynomial that fits the data. Under Tools and Basic Fitting select the 9th degree polynomial fit. How does it look? De-select the 9th degree polynomial and select the spline interpolant. This should produce a much more satisfactory graph and the shape-preserving spline should be even better.    The idea of a spline  The general idea of a spline is this: on each interval between data points, represent the graph with a simple function. The simplest spline is something very familiar to you; it is obtained by connecting the data with lines. Since linear is the most simple function of all, linear interpolation is the simplest form of spline. The next simplest function is quadratic. If we put a quadratic function on each interval then we should be able to make the graph a lot smoother. If we were really careful then we should be able to make the curve smooth at the data points themselves by matching up the derivatives. This can be done and the result is called a quadratic spline. Using cubic functions or 4th degree functions should be smoother still. So, where should we stop? There is an almost universal consensus that cubic is the optimal degree for splines and so we focus the rest of the section on cubic splines.    Cubic spline  Again, the basic idea of the cubic spline is that we represent the function by a different cubic function on each interval between data points. That is, if there are data points, then the spline is the function , where each is a cubic function. The most general cubic function has the form . To determine the spline we must determine the coefficients, , , , and for each . Since there are intervals, there are coefficients to determine. First we require that the spline interpolate by requiring , at every data point. In other words, . Notice that there are of these conditions. Then to make as smooth as possible we require at all the internal points, i.e. , . In terms of the points these conditions can be written as There are of these conditions. Since each is cubic, there are a total of coefficients in the formula for . So far we have equations, so we are 2 equations short of being able to determine all the coefficients. At this point we have to make a choice. The usual choice is to require These are called natural or simple boundary conditions. The other common option is called clamped boundary conditions: The terminology used here is obviously parallel to that used for beams. That is not the only parallel between beams and cubic splines. It is an interesting fact that a cubic spline is exactly the shape of a (linear) beam restrained to match the data by simple supports.  Note that the equations above are all linear equations with respect to the unknowns (coefficients). This feature makes splines easy to calculate since solving linear systems is what computers do best.     You are given the following data:  t = [ 0 .1 .499 .5 .6 1.0 1.4 1.5 1.899 1.9 2.0 ]  y = [ 0 .06 .17 .19 .21 .26 .29 .29 .30 .31 .31 ]     Plot the data, using '*' at the data points, then try a polynomial fit of the correct degree to interpolate this number of data points.   What do you observe? Look closely at the data and identify the points that force the interpolating polynomial to have large derivative.    What would happen if the t value of was rounded to ? Is the problem of converting this data to its interpolating polynomial well conditioned or badly conditioned?       Plot the data along with a spline interpolant. How does this compare with the plot above? What is a way to make the plot better?       "
},
{
  "id": "exercises-interpolation-1",
  "level": "2",
  "url": "sec-interpolation.html#exercises-interpolation-1",
  "type": "Exercise",
  "number": "3.1.8.1",
  "title": "",
  "body": " You are given the following data:  t = [ 0 .1 .499 .5 .6 1.0 1.4 1.5 1.899 1.9 2.0 ]  y = [ 0 .06 .17 .19 .21 .26 .29 .29 .30 .31 .31 ]     Plot the data, using '*' at the data points, then try a polynomial fit of the correct degree to interpolate this number of data points.   What do you observe? Look closely at the data and identify the points that force the interpolating polynomial to have large derivative.    What would happen if the t value of was rounded to ? Is the problem of converting this data to its interpolating polynomial well conditioned or badly conditioned?       Plot the data along with a spline interpolant. How does this compare with the plot above? What is a way to make the plot better?     "
},
{
  "id": "sec-leastsquares",
  "level": "1",
  "url": "sec-leastsquares.html",
  "type": "Section",
  "number": "3.2",
  "title": "Least Squares Fitting: Noisy Data",
  "body": " Least Squares Fitting: Noisy Data   Suppose we have data points . In the previous section we learned about interpolation, where the fitting function is required to satisfy for .Very often data has a significant amount of noise, so it makes more sense to only ask for . The least squares fitting method produces such an . The next illustration shows the effects noise can have and how least squares is used.    Traffic flow model  Suppose you are interested in the time it takes to travel on a certain section of highway for the sake of planning. According to theory, assuming up to a moderate amount of traffic, the time should be approximately where is the travel time when there is no other traffic and is the current number of cars on the road (in hundreds). To determine the coefficients and you could run several experiments which consist of driving the highway at different times of day and also estimating the number of cars on the road using a counter. Of course both of these measurements will contain noise, i.e. random fluctuations.  We could simulate such data in MATLAB as follows:  x = 1:.1:6;  T = .1*x + 1;  Tn = T + .1*randn(size(x));  plot(x,Tn,'.')  The data should look like it lies on a line, but with noise. Click on the Tools button and choose Basic fitting . Then choose a linear fit. The resulting line should go through the data in what looks like a very reasonable way. Click on show equations . Compare the equation with . The coefficients should be pretty close considering the amount of noise in the plot. Next, try to fit the data with a spline. The result should be ugly. We can see from this example that splines are not suited to noisy data .  How does MATLAB obtain a very nice line to approximate noisy data? The answer is a very standard numerical\/statistical method known as least squares.    Least squares   The least squares method requires you to first select what type of to consider (sometimes called a model) and what parameters it depends on. For example, you might choose . Given data , we can then determine the error at each point as . To make reasonable, we wish to simultaneously minimize all the errors . There are many possible ways one could go about this, but the standard one is to try to minimize the sum of the squares of the errors. That is, we denote by the sum of the squares . Since depends on some parameters, is a function of those parameters. To minimize , we can compute the partial derivatives of it with respect to each of the parameters, set the results equal to zero, and solve the resulting system of equations.    Linear least squares  If we choose to depend linearly on the parameters, then the resulting system of equations will be a linear system, which is easy to solve. This does not mean we have to choose to be a line. For example, the function is a quadratic in , but depends linearly on each of , , and . To illustrate the linear least squares process, we will go through it using this quadratic .  The error is , which has partial derivatives . Setting these equal to zero and rearranging yields the linear system . The entries in the matrix are determined from simple formulas using the data. Since this is a linear system, it is easily solved. The process is quick and easily automated, which is one reason it is very standard. MATLAB's basic fitting tool uses this process to obtain a degree polynomial fit whenever the number of data points is more than .     Drag coefficients  Drag due to air resistance is proportional to the square of the velocity, i.e. . In a wind tunnel experiment the velocity can be varied by setting the speed of the fan and the drag can be measured directly (it is the force on the object). In this and every experiment some random noise will occur. The following sequence of commands replicates the data one might receive from a wind tunnel:  v = 0:1:60;  d = .1234*v.^2;  dn = d + .4*v.*randn(size(v));  plot(v,dn,'*')  The plot should look like a quadratic, but with some noise. Using the tools menu, add a quadratic fit and enable the show equations option. What is the coefficient of ? How close is it to ?  Note that whenever you select a polynomial in MATLAB with a degree less than MATLAB will produce a least squares fit.  You will notice that the quadratic fit includes both a constant and linear term. We know from the physical situation that these should not be there; they are remnants of noise and the fitting process. Since we know the curve should be , we can do better by employing that knowledge. For instance, we know that the graph of versus should be a straight line. We can produce this easily:  z = v.^2;  plot(z,dn,'*')  By changing the independent variable from to we produced a plot that looks like a line with noise. Add a linear fit. What is the linear coefficient? This should be closer to than using a quadratic fit.  The second fit still has a constant term, which we know should not be there. If there was no noise, then at every data point we would have . We can express this as a linear system z'*k = dn' , which is badly overdetermined since there are more equations than unknowns. Since there is noise, each point will give a different estimate for . In other words, the overdetermined linear system is also inconsistent. When MATLAB encounters such systems, it automatically gives a least squares solution of the matrix problem, i.e. one that minimizes the sum of the squared errors, which is exactly what we want. To get the least squares estimate for , do k = z'' This will produce a number close to .1234.  Note that this is an application where we have physical knowledge. In this situation extrapolation would be meaningful. For instance we could use the plot to find the predicted drag at 80 mph.     Find two tables of data in an engineering textbook or engineering website. Plot each (with '*' at data points) and decide if the data is best represented by a polynomial interpolant, spline interpolant, or least squares fit polynomial. Label the axes and include a title. Turn in the best plot of each. Indicate the source and meaning of the data.    The following table contains information from a chemistry experiment in which the concentration of a product was measured at one minute intervals:      Time  0  1  2  3  4  5  6  7    Concentration  3.033  3.306  3.672  3.929  4.123  4.282  4.399  4.527     Plot this data. Suppose it is known that this chemical reaction should follow the law: . Following the example in the notes about the drag coefficients, change one of the variables so that the law is a linear function. Then plot the new variables and use the linear fit option to estimate and . What will be the eventual concentration? Finally, plot the graph of on the interval [0,15] (as a solid curve), along with the data from the table (using '*' ).    "
},
{
  "id": "exercises-leastsquares-1",
  "level": "2",
  "url": "sec-leastsquares.html#exercises-leastsquares-1",
  "type": "Exercise",
  "number": "3.2.4.1",
  "title": "",
  "body": " Find two tables of data in an engineering textbook or engineering website. Plot each (with '*' at data points) and decide if the data is best represented by a polynomial interpolant, spline interpolant, or least squares fit polynomial. Label the axes and include a title. Turn in the best plot of each. Indicate the source and meaning of the data.  "
},
{
  "id": "exercises-leastsquares-2",
  "level": "2",
  "url": "sec-leastsquares.html#exercises-leastsquares-2",
  "type": "Exercise",
  "number": "3.2.4.2",
  "title": "",
  "body": " The following table contains information from a chemistry experiment in which the concentration of a product was measured at one minute intervals:      Time  0  1  2  3  4  5  6  7    Concentration  3.033  3.306  3.672  3.929  4.123  4.282  4.399  4.527     Plot this data. Suppose it is known that this chemical reaction should follow the law: . Following the example in the notes about the drag coefficients, change one of the variables so that the law is a linear function. Then plot the new variables and use the linear fit option to estimate and . What will be the eventual concentration? Finally, plot the graph of on the interval [0,15] (as a solid curve), along with the data from the table (using '*' ).  "
},
{
  "id": "sec-LRTrules",
  "level": "1",
  "url": "sec-LRTrules.html",
  "type": "Section",
  "number": "3.3",
  "title": "Integration: Left, Right and Trapezoid Rules",
  "body": " Integration: Left, Right and Trapezoid Rules   The Left and Right endpoint rules  In this section, we wish to approximate a definite integral , where is a continuous function. In calculus we learned that integrals are (signed) areas and can be approximated by sums of smaller areas, such as the areas of rectangles. We begin by choosing points that subdivide : . The subintervals determine the width of each of the approximating rectangles. For the height, we learned that we can choose any height of the function where . The resulting approximation is . To use this to approximate integrals with actual numbers, we need to have a specific in each interval. The two simplest (and worst) ways to choose are as the left-hand point or the right-hand point of each interval. This gives concrete approximations which we denote by and given by .  function L = myleftsum(x,y) % produces the left sum from data input. % Inputs: x -- vector of the x coordinates of the partition % y -- vector of the corresponding y coordinates % Output: returns the approximate integral n = length(x); L = 0; for i = 1:n-1 % accumulate height times width L = L + y(i)*(x(i+1) - x(i)); end end    Often we can take to be evenly spaced, with each interval having the same width: , where is the number of subintervals. If this is the case, then and simplify to and . The foolishness of choosing left or right endpoints is illustrated in . As you can see, for a very simple function like , each rectangle of is too short, while each rectangle of is too tall. This will hold for any increasing function. For decreasing functions will always be too large while will always be too small.    Diagram with the left and right sums.   The left and right sums, and .     The Trapezoid rule  Knowing that the errors of and are of opposite sign, a very reasonable way to get a better approximation is to take an average of the two. We will call the new approximation : . This method also has a straight-forward geometric interpretation. On each subrectangle we are using , which is exactly the area of the trapezoid with sides and . We thus call the method the trapezoid method. See .    Diagram with the trapezoid rule sum.   The trapezoid rule, .   We can rewrite as . In the evenly spaced case, we can write this as . Caution: The convention used here is to begin numbering the points at , i.e. ; this allows to be the number of subintervals and the index of the last point . However, MATLAB's indexing convention begins at . Thus, when programming in MATLAB, the first entry in x will be , i.e. x(1) and x(n+1) .  If we are given data about the function, rather than a formula for the function, often the data are not evenly spaced. The following function program could then be used.  function T = mytrap(x,y) % Calculates the Trapezoid rule approximation of the integral from data % Inputs: x -- vector of the x coordinates of the partitian % y -- vector of the corresponding y coordinates % Output: returns the approximate integral n = length(x); T = 0; for i = 1:n-1 % accumulate twice the signed area of the trapezoids T = T + (y(i) + y(i+1)) * (x(i+1) - x(i)); end T = T\/2; % correct for the missing 1\/2 end      Using the Trapezoid rule for areas in the plane  Multi-variable Calculus tells us that you can calculate the area of a region in the plane by calculating the line integral , where is the counter-clockwise curve around the boundary of the region. We can represent such a curve by consecutive points on it, i.e.  , and . Since we are assuming the curve ends where it begins, we require . Applying the trapezoid method to the integral gives . This formula then is the basis for calculating areas when coordinates of boundary points are known, but not necessarily formulas for the boundaries such as in a land survey.  In the following script, we can use this method to approximate the area of a unit circle using points on the circle:  % Calculates pi using a trapezoid approximation of the unit circle. format long n = 10; % evaluate points on the circle t = linspace(0,2*pi,n+1); x = cos(t); y = sin(t); plot(x,y) A = 0 % accumulate (twice) the trapezoid area for i = 1:n A = A - (y(i)+y(i+1))*(x(i+1)-x(i)); end A = A\/2 % correct for the missing 1\/2      Vector Operations using Slicing and Summing  In the programs above we used loops to explicitly accumulate sums. For example, in mytrap we had  T = 0; for i = 1:n-1 T = T + .5*(y(i)+y(i+1))*(x(i+1) - x(i)); end  The alternative is to use vector operations by taking slices out of the vectors and using the sum function. We can replace the above code by  T = .5*sum( (y(1:n-1)+y(2:n)) .* (x(2:n)-x(1:n-1)) );  Generally, explicit loops are easier to understand but vector operations are more efficient and compact.     For the integral calculate , , and with even spacing (by hand, but use a calculator and a lot of digits) using formulas , and . Find the percentage error of these approximations, using the exact value.    Write a well-commented MATLAB function program myints whose inputs are , , and and whose outputs are , and , the left, right and trapezoid integral approximations for on with subintervals. To make it efficient,   take advantage of the fact that is constant,    use x = linspace(a,b,n+1) to make the values,    use y = f(x) to make the values,    use slice and sum to add the nd to th entries once,    and then add on the missing terms to obtain the left, right and trapezoid approximations.   Change to format long and apply your program to the integral . Compare with the results of the previous exercise. Also find , and and the percentage errors of these approximations.  Turn in the program and a brief summary of the results.    "
},
{
  "id": "fig-LnRn",
  "level": "2",
  "url": "sec-LRTrules.html#fig-LnRn",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "  Diagram with the left and right sums.   The left and right sums, and .  "
},
{
  "id": "fig-trap",
  "level": "2",
  "url": "sec-LRTrules.html#fig-trap",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": "  Diagram with the trapezoid rule sum.   The trapezoid rule, .  "
},
{
  "id": "exr-L4R4",
  "level": "2",
  "url": "sec-LRTrules.html#exr-L4R4",
  "type": "Exercise",
  "number": "3.3.5.1",
  "title": "",
  "body": " For the integral calculate , , and with even spacing (by hand, but use a calculator and a lot of digits) using formulas , and . Find the percentage error of these approximations, using the exact value.  "
},
{
  "id": "exercises-LRTrules-2",
  "level": "2",
  "url": "sec-LRTrules.html#exercises-LRTrules-2",
  "type": "Exercise",
  "number": "3.3.5.2",
  "title": "",
  "body": " Write a well-commented MATLAB function program myints whose inputs are , , and and whose outputs are , and , the left, right and trapezoid integral approximations for on with subintervals. To make it efficient,   take advantage of the fact that is constant,    use x = linspace(a,b,n+1) to make the values,    use y = f(x) to make the values,    use slice and sum to add the nd to th entries once,    and then add on the missing terms to obtain the left, right and trapezoid approximations.   Change to format long and apply your program to the integral . Compare with the results of the previous exercise. Also find , and and the percentage errors of these approximations.  Turn in the program and a brief summary of the results.  "
},
{
  "id": "sec-MSrules",
  "level": "1",
  "url": "sec-MSrules.html",
  "type": "Section",
  "number": "3.4",
  "title": "Integration: Midpoint and Simpson’s Rules",
  "body": " Integration: Midpoint and Simpson's Rules   Midpoint rule  If we use the endpoints of the subintervals to approximate the integral, we run the risk that the values at the endpoints do not accurately represent the average value of the function on the subinterval. A point which is much more likely to be close to the average would be the midpoint of each subinterval. Using the midpoint in the sum is called the midpoint rule. On the -th interval we will call the midpoint , i.e. . If is the length of each interval, then using midpoints to approximate the integral would give the formula . For even spacing, , and the formula is , where we define .  While the midpoint method is obviously better than or , it is not obvious that it is actually better than the trapezoid method , but it is.    Simpson's rule  Consider .    Diagram with the trapezoid rule and midpoint rule.   Comparing the trapezoid and midpoint method on a single subinterval. The function is concave up, in which case is too high, while is too low.   If is not linear on a subinterval, then it can be seen that the errors for the midpoint and trapezoid rules behave in a very predictable way, they have opposite sign. For example, if the function is concave up then will be too high, while will be too low. Thus it makes sense that a better estimate would be to average and . However, in this case we can do better than a simple average. The error will be minimized if we use a weighted average. To find the proper weight we take advantage of the fact that for a quadratic function the errors and are exactly related by . Thus we take the following weighted average of the two, which is called Simpson's rule: . If we use this weighting on a quadratic function the two errors will exactly cancel.  Notice that we write the subscript as . That is because we usually think of subintervals in the approximation; the subintervals of the trapezoid are further subdivided by the midpoints. We can then number all the points using integers. If we number them this way we notice that the number of subintervals must be an even number.  The formula for Simpson's rule if the subintervals are evenly spaced is the following (with intervals, where is even): .  Note that if we are presented with data where the points are evenly spaced with , it is easy to apply Simpson's method: Notice the pattern of the coefficients. The following program will produce these coefficients for intervals, if is an even number. Try it for .  mysimpweights   function w = mysimpweights(n) % Computes the weights for Simpson's rule % Input: n -- the number of intervals, must be even % Output: w -- a (column) vector with the weights, length n+1 if rem(n,2) ~= 0 error('n must be even for Simpsons rule') end w = 2*ones(n+1,1); % column vector, starts all 2's w(1) = 1; w(n+1) = 1; % set ends to 1's w(2:2:n)=4; % set even # entries to 4. end     Simpson's rule is incredibly accurate. We will consider just how accurate in the next section. The one drawback is that the points used must either be evenly spaced, or at least the odd number points must lie exactly at the midpoint between the even numbered points. In applications where you can choose the spacing, this is not a problem. In applications such as experimental or simulated data, you might not have control over the spacing and then you cannot use Simpson's rule.    Error bounds  The trapezoid, midpoint, and Simpson's rules are all approximations. As with any approximation, before you can safely use it, you must know how good (or bad) the approximation might be. For these methods there are formulas that give upper bounds on the error. In other words, the worst case errors for the methods. These bounds are given by the following statements:     Suppose is continuous on . Let . Then the errors and of the Trapezoid and Midpoint rules, respectively, applied to satisfy and .    Suppose is continuous on . Let . Then the error of Simpson's rule applied to satisfies    In practice and are themselves approximated from the values of at the evaluation points.  The most important thing in these error bounds is the dependence on . To emphasize this dependence, we sometimes use the order notation  . The trapezoid and midpoint method errors are , so the methods have order 2. The Simpson's rule error is , so it has order 4. If is just moderately small, then there is a huge advantage with Simpson's method.  In MATLAB there is a built-in command for definite integrals: integral(f,a,b) where the f is a function and a and b are the endpoints. The command uses adaptive Simpson quadrature , a form of Simpson's rule that checks its own accuracy and adjusts the grid size where needed. Here is an example of its usage:  f = @(x) x.^(1\/3).*sin(x.^3)  I = integral(f,0,1)       Using formulas and , for the integral calculate and (by hand, but use a calculator and a lot of digits). Find the percentage error of these approximations, using the exact value. Compare with .    Write a well-commented MATLAB function program mymidpoint that calculates the midpoint rule approximation for on the interval with subintervals. The inputs should be , , and . Use your program on the integral to obtain and . Compare these with and the true value of the integral.    Write a well-commented MATLAB function program mysimpson that calculates the Simpson's rule approximation for on the interval with subintervals. It should call the program mysimpweights ( ) to produce the coefficients. Use your program on the integral to obtain and . Compare these with , , and the true value of the integral.    "
},
{
  "id": "fig-trapmid",
  "level": "2",
  "url": "sec-MSrules.html#fig-trapmid",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "  Diagram with the trapezoid rule and midpoint rule.   Comparing the trapezoid and midpoint method on a single subinterval. The function is concave up, in which case is too high, while is too low.  "
},
{
  "id": "prg-mysimpweights",
  "level": "2",
  "url": "sec-MSrules.html#prg-mysimpweights",
  "type": "Program",
  "number": "3.4.2",
  "title": "mysimpweights",
  "body": " mysimpweights   function w = mysimpweights(n) % Computes the weights for Simpson's rule % Input: n -- the number of intervals, must be even % Output: w -- a (column) vector with the weights, length n+1 if rem(n,2) ~= 0 error('n must be even for Simpsons rule') end w = 2*ones(n+1,1); % column vector, starts all 2's w(1) = 1; w(n+1) = 1; % set ends to 1's w(2:2:n)=4; % set even # entries to 4. end   "
},
{
  "id": "exr-M4S4",
  "level": "2",
  "url": "sec-MSrules.html#exr-M4S4",
  "type": "Exercise",
  "number": "3.4.4.1",
  "title": "",
  "body": " Using formulas and , for the integral calculate and (by hand, but use a calculator and a lot of digits). Find the percentage error of these approximations, using the exact value. Compare with .  "
},
{
  "id": "exr-mymidpoint",
  "level": "2",
  "url": "sec-MSrules.html#exr-mymidpoint",
  "type": "Exercise",
  "number": "3.4.4.2",
  "title": "",
  "body": " Write a well-commented MATLAB function program mymidpoint that calculates the midpoint rule approximation for on the interval with subintervals. The inputs should be , , and . Use your program on the integral to obtain and . Compare these with and the true value of the integral.  "
},
{
  "id": "exercises-MSrules-3",
  "level": "2",
  "url": "sec-MSrules.html#exercises-MSrules-3",
  "type": "Exercise",
  "number": "3.4.4.3",
  "title": "",
  "body": " Write a well-commented MATLAB function program mysimpson that calculates the Simpson's rule approximation for on the interval with subintervals. It should call the program mysimpweights ( ) to produce the coefficients. Use your program on the integral to obtain and . Compare these with , , and the true value of the integral.  "
},
{
  "id": "sec-plotting-two",
  "level": "1",
  "url": "sec-plotting-two.html",
  "type": "Section",
  "number": "3.5",
  "title": "Plotting Functions of Two Variables",
  "body": " Plotting Functions of Two Variables   Functions on Rectangular Grids  Suppose you wish to plot a function on the rectangle and . The graph of a function of two variables is of course a three dimensional object. Visualizing the graph is often very useful.  For example, suppose you have a formula and you are interested in the function on the region , . A way to plot this function in MATLAB would be the following sequence of commands:  f = @(x,y) x.*sin(x.*y)  [X,Y] = meshgrid(0:.1:5,pi:.01*pi:2*pi);  Z = f(X,Y)  mesh(X,Y,Z)  This will produce a 3-D plot that you can rotate by clicking on the rotate icon and then dragging with the mouse.Instead of the command mesh , you could use the command surf(X,Y,Z)   The key command in this sequence is [X Y] = meshgrid(a:h:b,c:k:d) , which produces matrices of x and y values in X and Y . Enter:  size(X)  size(Y)  size(Z)  to see that each of these variables is a matrix. To see the first few entries of X enter X(1:6,1:6) and to see the first few values of Y type Y(1:6,1:6) You should observe that the values in X begin at on the left column and increase from left to right. The values on the other have start at at the top and increase from top to bottom. Note that this arrangement is flipped from the usual arrangment in the - plane.  In the command [X Y] = meshgrid(a:h:b,c:k:d) , is the increment in the direction and is the increment in the direction. Often we will calculate , where is the number of intervals in the direction and is the number of intervals in the direction. To obtain a good plot it is best if and can be set between and .  A common way of visualizing a function of two variables is by a Contour Plot. In a contour plot we draw several level curves of the function, which are the curves at which the function is equal to a few values. A topographical map is an example of a contour plot. To produce a contour plot for the function as above, since we have input the function itself and created a meshgrid on which we want to plot it, we simply input: contour(X,Y,Z,10) The optional number ``10'' specify how many contour curves to display.  For another example of meshgrid , contour and mesh , try the following and look at X and Y .  [X,Y] = meshgrid(0:.05:4,1:.02:2);  Z = (X+Y).\/(1+X.^2+Y.^2);  contour(X,Y,Z,11)  mesh(X,Y,Z)      Scattered Data and Triangulation  Often we are interested in objects whose bases are not rectangular. For instance, data does not usually come arranged in a nice rectangular grid; rather, measurements are taken where convenient.  In MATLAB we can produce triangles for a region by recording the coordinates of the vertices and recording which vertices belong to each triangle. The following script program produces such a set of triangles:  % mytriangles % Program to produce a triangulation. % V contains vertices, which are (x,y) pairs V = [ 1\/2 1\/2 ; 1 1 ; 3\/2 1\/2 ; .5 1.5 ; 0 0 1 0 ; 2 0 ; 2 1 ; 1.5 1.5 ; 1 2 0 2 ; 0 1] % x, y are row vectors containing coordinates of vertices x = V(:,1)'; y = V(:,2)'; % Assign the triangles using Delaunay's algorithm T = delaunay(x,y)    You can plot the triangles using trimesh(T,x,y) You can also prescribe values (heights) at each vertex directly (say from a survey): z1 = [ 2 3 2.5 2 1 1 .5 1.5 1.6 1.7 .9 .5 ]; or using a function:  f = @(x,y) abs(sin(x.*y)).^(3\/2);  z2 = f(x,y);  The resulting profiles can be plotted:  trimesh(T,x,y,z1)  trisurf(T,x,y,z2)    Each row of the matrix T corresponds to a triangle, so T(i,:) gives triangle number i . The three corners of triangle number i are at indices T(i,1) , T(i,2) , and T(i,3) . So for example to get the -coordinate of the second point of triangle number 5, enter y(T(5,2))   To see other examples of regions defined by triangles, download mywedge.m ( ) and mywasher.m ( ) and run them. Each of these programs defines vectors x and y of and values of vertices and a matrix T . As before T is a list of sets of three integers. Each triple of integers indicates which vertices to connect in a triangle.  To plot a function, say on the washer figure try  mywasher  z = x.^2 - y.^2  trisurf(T,x,y,z)  Note again that this plot can be rotated using the icon and mouse.     Plot the function on the rectangle , using meshgrid and mesh . Make an appropriate choice of and and if necessary a rotation to produce a good plot. Calculate the and corresponding to your and . Turn in your plot and the calculation of and .    Modeling after mywasher.m ( ), produce  A simple figure composed of 4 triangles.   using integer coordinates for the vertices. Use the axis command to zoom out so the outside edges are clearly visible. Compute and plot the graph. Turn in your program and the plots.    "
},
{
  "id": "exercises-plotting-two-1",
  "level": "2",
  "url": "sec-plotting-two.html#exercises-plotting-two-1",
  "type": "Exercise",
  "number": "3.5.3.1",
  "title": "",
  "body": " Plot the function on the rectangle , using meshgrid and mesh . Make an appropriate choice of and and if necessary a rotation to produce a good plot. Calculate the and corresponding to your and . Turn in your plot and the calculation of and .  "
},
{
  "id": "exercises-plotting-two-2",
  "level": "2",
  "url": "sec-plotting-two.html#exercises-plotting-two-2",
  "type": "Exercise",
  "number": "3.5.3.2",
  "title": "",
  "body": " Modeling after mywasher.m ( ), produce  A simple figure composed of 4 triangles.   using integer coordinates for the vertices. Use the axis command to zoom out so the outside edges are clearly visible. Compute and plot the graph. Turn in your program and the plots.  "
},
{
  "id": "sec-maxmingrad",
  "level": "1",
  "url": "sec-maxmingrad.html",
  "type": "Section",
  "number": "3.6",
  "title": "The Gradient and Max-Min Problems",
  "body": " The Gradient and Max-Min Problems   The gradient of a function of multiple variables  If is a real-valued function of variables, i.e. , , , , then the gradient of is the vector: , where we use the vector notation . For example, if , then .  Note that the gradient is a vector-valued function of multiple variables. This type of function is often called a vector field.  The gradient vector has important features with geometric meaning.   The gradient vector points in the direction in which is increasing the most.    The length of the gradient vector is equal to the derivative of in that direction.    The gradient vector is perpendicular to the level curve through that point.     We can visualize a gradient (or other vector field) using the MATLAB command quiver (makes arrows).  [x1,x2] = meshgrid(-2:0.2:2);  z = x1.*exp(-x1.^2-x2.^2+sin(x1.*x2));  dz_dx1 = (1+x1.*(-2*x1+cos(x1.*x2).*x2)).*exp(-x1.^2-x2.^2+sin(x1.*x2));  dz_dx2 = x1.*(-2*x2+cos(x1.*x2).*x1).*exp(-x1.^2-x2.^2+sin(x1.*x2));  contour(x1,x2,z,10)  hold on  quiver(x1,x2,dz_dx1,dz_dx2)  hold off  Compare this to the surface plot:  figure()  surf(x1,x2,z)      Optimization in multiple variables  If a differentiable function of multiple variables, , has a maximum or minimum at point , then we will have: . Thus one way to locate max or min points for a specific function is to solve . This will often lead to systems of non-linear equations as we encountered in . For example, for ,to attempt to find critical point we would need to try to solve: and . That, obviously, is going to be very hard and in fact is impossible using algebra. Thus we will have to use numerical methods to find any maximum or minimum points. The multiple variable Newton's method that we learned in section would be one option. In the next section we introduce another common algorithm.    The gradient ascent or descent method  We will take advantage of the fact that the gradient vector points in the direction of greatest increase in the function . If is a function of and , then we can think of the graph of as a landscape and the gradient points ``uphill''. That gives us a very handy way to find maximum points, just follow the gradient vectors as they will take you toward higher values of . See .     Quiver plot showing ascent path.    Surface plot.    Gradient ascent on .   Since the gradient vector field may change from point to point, we can only ``follow'' it numerically in finite steps. That is, starting from an initial guess , we generate a sequence of points by the formula . The hope then is that . The number is often called the ``learning rate''. It should not be too small or too large. If it is too small the algorithm will be slow. If it is too large, the steps might skip over a critical point. There is ongoing research about how to choose it optimally.  Notice the similarities between this method and the Newton's method for nonlinear systems in . In both cases we have a function of a vector and generate a sequence of vectors .     Find by hand the gradient of the function . Plot it on the rectangle , using meshgrid and quiver . On the same figure, add the contour plot of .    Write a well-commented script program that uses the gradient descent method to find a minimum point for the function , starting from . Compare with the plot in to check that it worked. (Hint: Review the program mymultnewton.m in for examples of making functions of vectors.)    "
},
{
  "id": "fig-gradientascent",
  "level": "2",
  "url": "sec-maxmingrad.html#fig-gradientascent",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": "   Quiver plot showing ascent path.    Surface plot.    Gradient ascent on .  "
},
{
  "id": "exr-plotquiver",
  "level": "2",
  "url": "sec-maxmingrad.html#exr-plotquiver",
  "type": "Exercise",
  "number": "3.6.4.1",
  "title": "",
  "body": " Find by hand the gradient of the function . Plot it on the rectangle , using meshgrid and quiver . On the same figure, add the contour plot of .  "
},
{
  "id": "exercises-maxmingrad-2",
  "level": "2",
  "url": "sec-maxmingrad.html#exercises-maxmingrad-2",
  "type": "Exercise",
  "number": "3.6.4.2",
  "title": "",
  "body": " Write a well-commented script program that uses the gradient descent method to find a minimum point for the function , starting from . Compare with the plot in to check that it worked. (Hint: Review the program mymultnewton.m in for examples of making functions of vectors.)  "
},
{
  "id": "sec-double-int-rect",
  "level": "1",
  "url": "sec-double-int-rect.html",
  "type": "Section",
  "number": "3.7",
  "title": "Double Integrals for Rectangles",
  "body": " Double Integrals for Rectangles   The center point method  Suppose that we need to find the integral of a function, , on a rectangle . Calculus tells us to do this by an iterated integral . For instance, if is the rectangle , , then Calculus also tells us that the integral is the limit of the Riemann sums of the function as the size of the subrectangles goes to zero. This means that the Riemann sums are approximations of the integral, which is precisely what we need for numerical methods.  For a rectangle , we begin by subdividing into smaller subrectangles , in a systematic way. We will divide into subintervals and into subintervals. Then will be the intersection of the -th subinterval in with the -th subinterval of . In this way the entire rectangle is subdivided into subrectangles, numbered as in Figure .    Diagram of a rectangle subdivided into 5 x 4 rectangles.   Subdivision of the rectangle into subrectangles . Note that the arrangement in the - plane is completely different from the convention in a matrix.   A Riemann sum using this subdivision would have the form , where is the area of , and is a point in . The theory of integrals tells us that if is continuous, then this sum will converge to the same number, no matter how we choose . For instance, we could choose to be the point in the lower left corner of and the sum would still converge as the size of the subrectangles goes to zero. However, in practice we wish to choose in such a way to make as accurate as possible even when the subrectangles are not very small. The obvious choice for the best point in would be the center point. The center point is most likely of all points to have a value of close to the average value of . If we denote the center points by , then the sum becomes . Here . Note that if the subdivision is evenly spaced then and , and so in that case .    The four corners method  Another good idea would be to take the value of not only at one point, but as the average of the values at several points. An obvious choice would be to evaluate at all four corners of each then average those. If we note that the lower left corner is , the upper left is , the lower right is and the upper right is , then the corresponding sum will be , which we will call the four-corners method. If the subrectangles are evenly spaced, then we can simplify this expression. Notice that gets counted multiple times depending on where is located. For instance if is in the interior of then it is the corner of subrectangles. Thus the sum becomes , where is the area of the subrectangles. We can think of this as a weighted average of the values of at the grid points . The weights used are represented in the matrix . We could implement the four-corner method by forming a matrix of values at the grid points, then doing entry-wise multiplication of the matrix with the weight matrix. Then the integral would be obtained by summing all the entries of the resulting matrix and multiplying that by . The formula would be . Notice that the four-corners method coincides with applying the trapezoid rule in each direction. Thus it is in fact a double trapezoidrule.    The double Simpson method  The next improvement one might make would be to take an average of the center point sum and the four corners sum . However, a more standard way to obtain a more accurate method is the Simpson double integral. It is obtained by applying Simpson's rule for single integrals to the iterated double integral. The resulting method requires that both and be even numbers and the grid be evenly spaced. If this is the case we sum up the values with weights represented in the matrix The sum of the weighted values is multiplied by and the formula is .  MATLAB has a built in command for double integrals on rectangles: integral2(f,a,b,c,d) . Here is an example:  f = @(x,y) sin(x.*y).\/sqrt(x+y)  I = integral2(f,0.5,1,0.5,2)  Note that here, as usual, operations are component-wise.  Below is a MATLAB function which will produce the matrix of weights needed for Simpson's rule for double integrals. It uses the function mysimpweights ( ).   mydblsimpweights   function W = mydblsimpweights(m,n) % Return the matrix of weights for Simpson's rule for double integrals. % Inputs: m -- number of intervals in the row direction. % must be even. % n -- number of intervals in the column direction. % must be even. % Output: W -- a (m+1)x(n+1) matrix of the weights if rem(m,2)~=0 || rem(n,2)~=0 error('m and n must be even for Simpsons rule') end % get 1-dimensional weights u = mysimpweights(m); v = mysimpweights(n); W = u*v'; end       Download the program mylowerleft.m ( ) and test it. Find and fix the bug in it. Modify it to make a new program mycenter that does the center point method. Implement the change by changing the meshgrid to put the grid points at the centers of the subrectangles. Look at the mesh plot produced to make sure the program is putting the grid where you want it. Use both programs to approximate the integral , using . Evaluate this integral exactly (by hand) and compare the accuracy of the two programs.    Write a well-commented MATLAB function program mydblsimp that computes the Simpson's rule approximation. Let it call the program mydblsimpweights ( ) to make the weight matrix,  . Check the program on the integral in the previous problem using and .    Using mysimpweights ( ) and mydblsimpweights ( ) as models make well-commented MATLAB function programs mytrapweights and mydbltrapweights that will produce the weights for the trapezoid rule and the weight matrix for the four corners (double trapezoid) method . Use it to approximate the integral in the previous problem usings and . Turn in the programs, the weights for a grid, and the results of your tests on the integral.    "
},
{
  "id": "fig-rects",
  "level": "2",
  "url": "sec-double-int-rect.html#fig-rects",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": "  Diagram of a rectangle subdivided into 5 x 4 rectangles.   Subdivision of the rectangle into subrectangles . Note that the arrangement in the - plane is completely different from the convention in a matrix.  "
},
{
  "id": "prg-mydblsimpweights",
  "level": "2",
  "url": "sec-double-int-rect.html#prg-mydblsimpweights",
  "type": "Program",
  "number": "3.7.2",
  "title": "mydblsimpweights",
  "body": " mydblsimpweights   function W = mydblsimpweights(m,n) % Return the matrix of weights for Simpson's rule for double integrals. % Inputs: m -- number of intervals in the row direction. % must be even. % n -- number of intervals in the column direction. % must be even. % Output: W -- a (m+1)x(n+1) matrix of the weights if rem(m,2)~=0 || rem(n,2)~=0 error('m and n must be even for Simpsons rule') end % get 1-dimensional weights u = mysimpweights(m); v = mysimpweights(n); W = u*v'; end   "
},
{
  "id": "exercises-double-int-rect-1",
  "level": "2",
  "url": "sec-double-int-rect.html#exercises-double-int-rect-1",
  "type": "Exercise",
  "number": "3.7.4.1",
  "title": "",
  "body": " Download the program mylowerleft.m ( ) and test it. Find and fix the bug in it. Modify it to make a new program mycenter that does the center point method. Implement the change by changing the meshgrid to put the grid points at the centers of the subrectangles. Look at the mesh plot produced to make sure the program is putting the grid where you want it. Use both programs to approximate the integral , using . Evaluate this integral exactly (by hand) and compare the accuracy of the two programs.  "
},
{
  "id": "exercises-double-int-rect-2",
  "level": "2",
  "url": "sec-double-int-rect.html#exercises-double-int-rect-2",
  "type": "Exercise",
  "number": "3.7.4.2",
  "title": "",
  "body": " Write a well-commented MATLAB function program mydblsimp that computes the Simpson's rule approximation. Let it call the program mydblsimpweights ( ) to make the weight matrix,  . Check the program on the integral in the previous problem using and .  "
},
{
  "id": "exercises-double-int-rect-3",
  "level": "2",
  "url": "sec-double-int-rect.html#exercises-double-int-rect-3",
  "type": "Exercise",
  "number": "3.7.4.3",
  "title": "",
  "body": " Using mysimpweights ( ) and mydblsimpweights ( ) as models make well-commented MATLAB function programs mytrapweights and mydbltrapweights that will produce the weights for the trapezoid rule and the weight matrix for the four corners (double trapezoid) method . Use it to approximate the integral in the previous problem usings and . Turn in the programs, the weights for a grid, and the results of your tests on the integral.  "
},
{
  "id": "sec-double-int-non",
  "level": "1",
  "url": "sec-double-int-non.html",
  "type": "Section",
  "number": "3.8",
  "title": "Double Integrals for Non-rectangles",
  "body": " Double Integrals for Non-rectangles   In the previous section we considered only integrals over rectangular regions. In practice, regions of interest are rarely rectangles and so in this section we consider two strategies for evaluating integrals over other regions.  Calculus tells us that if the region can be described by simple functions, then we might be able to use iterated integrals. For instance, suppose that is the region inside of a circle of radius . Since the boundary of that circle is given by , we could express the integral of on this region by: . Of course this integral may be complicated, even if is simple. If , then . At this point we would need to do a trig substitution to find the value of the integral.    Redefining the function  One strategy is to redefine the function so that it is zero outside the region of interest, then integrate over a rectangle that includes the region.  For example, suppose we need to approximate the value of where is the triangle with corners at , and . Then we could let be the rectangle which contains the triangle . Notice that the hypotenuse of the triangle has the equation . Then make if and if . In MATLAB we can make this function with the command f = @(x,y) sin(x.*y).^3.*(2*x + y <= 2) In this command <= is a logicalcommand. The term in parentheses is then a logical statementand is given the value 1 if the statement is true and 0 if it is false. We can then integrate the modified f on using the command I = integral2(f,0,1,0,2)   As another example, suppose we need to integrate the function inside the circle of radius 2 centered at . The equation for this circle is . Note that the inside of the circle is and that the circle is contained in the rectangle . Thus we can create the right function, plot it, and integrate it by  f = @(x,y) (10+(x-1).*(y-2)).*((x-1).^2 + (y-2).^2 <= 4)  [X Y] = meshgrid(-4:0.01:4,-3:0.01:5);  Z = f(X,Y);  mesh(X,Y,Z)  I = integral2(f,-1,3,0,4)      Integration Based on Triangles  The second approach to integrating over non-rectangular regions is based on subdividing the region into triangles. Such a subdivision is called a triangulation. On regions where the boundary consists of line segments, this can be done exactly. Even on regions where the boundary contains curves, this can be done approximately. This is a very important idea for several reasons, the most important of which is that the finite elements method is based on it. Another reason this is important is that often the values of are not given by a formula, but from data. For example, suppose you are surveying on a construction site and you want to know how much fill will be needed to bring the level up to the plan. You would proceed by taking elevations at numerous points across the site. However, if the site is irregularly shaped or if there are obstacles on the site, then you cannot make these measurements on an exact rectangular grid. In this case, you can use triangles by connecting your points with triangles. Many software packages will even choose the triangles for you (MATLAB will do it using the command delaunay ).  The basic idea of integrals based on triangles is exactly the same as that for rectangles; the integral is approximated by a sum where each term is a value times an area , where is the number of triangles, is the area of the triangle and a point in the triangle. However, rather than considering the value of at just one point people often consider an average of values at several points. The most convenient of these is of course the corner points. We can represent this sum by , where is the average of at the corners.  If the triangle has vertices , and , the formula for area is . The function below implements this method.   mythreecorners   function I = mythreecorners(f,V,T) % Integrates a function based on a triangulation, using three corners % Inputs: f -- the function to integrate % V -- the vertices. % Each row has the x and y coordinates of a vertex % T -- the triangulation. % Each row gives the indices of the three corners % Output: the approximate integral x = V(:,1); % extract x and y coordinates of all nodes y = V(:,2); I=0; % start accumulator at 0 p = size(T,1); % get number of triangles for i = 1:p % loop through the triangles x1 = x(T(i,1)); % find coordinates of the three corners x2 = x(T(i,2)); x3 = x(T(i,3)); y1 = y(T(i,1)); y2 = y(T(i,2)); y3 = y(T(i,3)); A = .5*abs(det([x1, x2, x3; y1, y2, y3; 1, 1, 1])); %find area z1 = f(x1,y1); % find values at the three corners z2 = f(x2,y2); z3 = f(x3,y3); zavg = (z1 + z2 + z3)\/3; % average the values I = I + zavg*A; % accumulate integral end end    Another idea would be to use the center point (centroid) of each triangle. If the triangle has vertices , and , then the centroid is given by the simple formulas .        Download the program mywasher.m ( ). Plot on the region produced by mywasher.m and use the program mythreecorners.m ( ) to calculate the integral of on the washer. Is this accurate? How do you know?    Download the program mywedge.m ( ). Plot on the region produced by mywedge.m . Use mythreecorners.m ( ) to calculate the integral of on this wedge.       Modify the program mythreecorners.m ( ) to a new program mycenters.m that does the centerpoint method for triangles. Run the program on the region produced by mywasher.m ( ) with the function and on the region produced by mywedge.m ( ) with the function .    "
},
{
  "id": "prg-mythreecorners",
  "level": "2",
  "url": "sec-double-int-non.html#prg-mythreecorners",
  "type": "Program",
  "number": "3.8.1",
  "title": "mythreecorners",
  "body": " mythreecorners   function I = mythreecorners(f,V,T) % Integrates a function based on a triangulation, using three corners % Inputs: f -- the function to integrate % V -- the vertices. % Each row has the x and y coordinates of a vertex % T -- the triangulation. % Each row gives the indices of the three corners % Output: the approximate integral x = V(:,1); % extract x and y coordinates of all nodes y = V(:,2); I=0; % start accumulator at 0 p = size(T,1); % get number of triangles for i = 1:p % loop through the triangles x1 = x(T(i,1)); % find coordinates of the three corners x2 = x(T(i,2)); x3 = x(T(i,3)); y1 = y(T(i,1)); y2 = y(T(i,2)); y3 = y(T(i,3)); A = .5*abs(det([x1, x2, x3; y1, y2, y3; 1, 1, 1])); %find area z1 = f(x1,y1); % find values at the three corners z2 = f(x2,y2); z3 = f(x3,y3); zavg = (z1 + z2 + z3)\/3; % average the values I = I + zavg*A; % accumulate integral end end   "
},
{
  "id": "exercises-double-int-non-1",
  "level": "2",
  "url": "sec-double-int-non.html#exercises-double-int-non-1",
  "type": "Exercise",
  "number": "3.8.3.1",
  "title": "",
  "body": "    Download the program mywasher.m ( ). Plot on the region produced by mywasher.m and use the program mythreecorners.m ( ) to calculate the integral of on the washer. Is this accurate? How do you know?    Download the program mywedge.m ( ). Plot on the region produced by mywedge.m . Use mythreecorners.m ( ) to calculate the integral of on this wedge.     "
},
{
  "id": "exercises-double-int-non-2",
  "level": "2",
  "url": "sec-double-int-non.html#exercises-double-int-non-2",
  "type": "Exercise",
  "number": "3.8.3.2",
  "title": "",
  "body": " Modify the program mythreecorners.m ( ) to a new program mycenters.m that does the centerpoint method for triangles. Run the program on the region produced by mywasher.m ( ) with the function and on the region produced by mywedge.m ( ) with the function .  "
},
{
  "id": "sec-differentiation",
  "level": "1",
  "url": "sec-differentiation.html",
  "type": "Section",
  "number": "3.9",
  "title": "Numerical Differentiation",
  "body": " Numerical Differentiation   Approximating derivatives from data  Suppose that a variable depends on another variable , i.e. , but we only know the values of at a finite set of points, e.g., as data from an experiment or a simulation: . Suppose then that we need information about the derivative of . One obvious idea would be to approximate by the Forward Difference  . This formula follows directly from the definition of the derivative in Calculus. An alternative would be to use a Backward Difference  .  Since the errors for the forward difference and backward difference tend to have opposite signs, it would seem likely that averaging the two methods would give a better result than either alone. If the points are evenly spaced, i.e. , then averaging the forward and backward differences leads to a symmetric expression called the Central Difference  . See for an illustration of these three differences.    Line segments for three difference approximations.   The three difference approximations of .     An example  The following code plots the function , its derivative, and the central difference approximation to the derivative.    x = linspace(0,2*pi,51);  h = x(2)-x(1);  mid = (x(1:end-1)+x(2:end))\/2;  y = sin(x) + .5*sin(1.5*x);  dy1 = (y(2:end)-y(1:end-1))\/h;  dy2 = cos(x) + .75*cos(1.5*x);  plot(x,y,'k',mid,dy1,'b*',x,dy2,'r')      Errors of approximation  We can use Taylor polynomials to derive the accuracy of the forward, backward, and central difference formulas. For example the usual form of the Taylor polynomial with remainder (sometimes called Taylor's Theorem) is , where is some (unknown) number between and . Letting , and solving for leads to . Notice that the quotient in this equation is exactly the forward difference formula. Thus the error of the forward difference is which means it is . Replacing in the above calculation by gives the error for the backward difference formula; it is also . For the central difference, the error can be found from the third degree Taylor polynomials with remainder , where and . Subtracting these two equations and solving for leads to . This shows that the error for the central difference formula is . Thus, central differences are significantly better and so: It is best to use central differences whenever possible.   There are also central difference formulas for higher order derivatives. These all have error of order : .    Partial Derivatives  Suppose is a function of two variables that we only know at grid points . We will use the notation frequently throughout the rest of the sections. We can suppose that the grid points are evenly spaced, with an increment of in the direction and in the direction. The central difference formulas for the partial derivatives would be . The second partial derivatives are , and the mixed partial derivative is .   Caution: Notice that we have indexed so that as a matrix each row represents the values of at a certain and each column contains values at . The arrangement in the matrix does not coincide with the usual orientation of the -plane.  Let's consider an example. Let the values of at be recorded in the matrix Assume the indices begin at 1, is the index for rows and the index for columns. Suppose that and . Then would be approximated by the central difference . The partial derivative is approximated by .     Suppose you are given the data in the following table.    x  0  5  10  15  20    y  0  19  26  29  31      Give the forward, backward and central difference approximations of .    Give the central difference approximations for , and .       Suppose the position of a runner was recorded every half second and the results are given in the following table. Units of distance are meters.    t  0  .5  1.0  1.5  2.0  2.5  3.0  3.5  4.0  4.5  5.0  5.5  6.0    y  0  .25  1  3  6  10  15  21  27  33  39  45  51   Using central differences everywhere possible, and a forward or backward difference where a central difference is not possible, calculate and plot the velocity and the acceleration of the runner as a function of time for to 6. You may do the calculations by hand or by MATLAB. Turn in your plots and calculations.    Suppose values of at points are given in the matrix . Suppose that and . Approximate the following derivatives by central differences:                          "
},
{
  "id": "fig-FBCdifferences",
  "level": "2",
  "url": "sec-differentiation.html#fig-FBCdifferences",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "  Line segments for three difference approximations.   The three difference approximations of .  "
},
{
  "id": "exercises-differentiation-1",
  "level": "2",
  "url": "sec-differentiation.html#exercises-differentiation-1",
  "type": "Exercise",
  "number": "3.9.5.1",
  "title": "",
  "body": " Suppose you are given the data in the following table.    x  0  5  10  15  20    y  0  19  26  29  31      Give the forward, backward and central difference approximations of .    Give the central difference approximations for , and .     "
},
{
  "id": "exercises-differentiation-2",
  "level": "2",
  "url": "sec-differentiation.html#exercises-differentiation-2",
  "type": "Exercise",
  "number": "3.9.5.2",
  "title": "",
  "body": " Suppose the position of a runner was recorded every half second and the results are given in the following table. Units of distance are meters.    t  0  .5  1.0  1.5  2.0  2.5  3.0  3.5  4.0  4.5  5.0  5.5  6.0    y  0  .25  1  3  6  10  15  21  27  33  39  45  51   Using central differences everywhere possible, and a forward or backward difference where a central difference is not possible, calculate and plot the velocity and the acceleration of the runner as a function of time for to 6. You may do the calculations by hand or by MATLAB. Turn in your plots and calculations.  "
},
{
  "id": "exercises-differentiation-3",
  "level": "2",
  "url": "sec-differentiation.html#exercises-differentiation-3",
  "type": "Exercise",
  "number": "3.9.5.3",
  "title": "",
  "body": " Suppose values of at points are given in the matrix . Suppose that and . Approximate the following derivatives by central differences:                        "
},
{
  "id": "sec-main-error",
  "level": "1",
  "url": "sec-main-error.html",
  "type": "Section",
  "number": "3.10",
  "title": "The Main Sources of Error",
  "body": " The Main Sources of Error   Truncation Error  Truncation error is defined as the error caused directly by an approximation method. For instance, all numerical integration methods are approximations and so there is error, even if the calculations are performed exactly. Numerical differentiation also has a truncation error, as will the differential equations methods we will study in Part IV, which are based on numerical differentiation formulas. There are two ways to minimize truncation error: (1) use a higher order method, and (2) use a finer grid so that points are closer together. Unless the grid is very small, truncation errors are usually much larger than roundoff errors. The obvious tradeoff is that a smaller grid requires more calculations, which in turn produces more roundoff errors and requires more running time.    Roundoff Error  Roundoff error always occurs when a finite number of digits are recorded after an operation. Fortunately, this error is extremely small. The standard measure of how small is called machine epsilon . It is defined as the smallest number that can be added to to produce another number on the machine, i.e. if a smaller number is added the result will be rounded down to . In IEEE standard double precision (used by MATLAB and most serious software), machine epsilon is or about . A different, but equivalent, way of thinking about this is that the machine records floating binary digits or about floating decimal digits. Thus there are never more than significant digits in any calculation. This of course is more than adequate for any application. However, there are ways in which this very small error can cause problems.  You can test that machine epsilon is :  format long  (1 + 2^(-52)) - 1  (1 + 2^(-53)) - 1  MATLAB has a command that produces machine epsilon: eps To see an unexpected occurence of round-off try  (2^52+1) - 2^52  (2^53+1) - 2^53  Thus roundoff isn't always small! It is just small compared with the scale of the numbers you are calculating. A number of magnitude will have roundoff of magnitude about .    Loss of Precision (also called Loss of Significance)  Suppose we had some way to compute that effectively did the calculation . Rounding everything to 16 digits, we are computing . The addition is performed first and the result rounded to 16 digits, giving . Although roundoff caused some error, it is about a factor of smaller than the numbers shown. In other words, all but perhaps the last digit shown is correct. Next the subtraction is performed, giving . The leading zeros are not significant, so we lost 9 significant digits and have only 7 left. This type of error, where common leading significant digits cancel, is loss-of-precision (also called loss-of-significance) error. Computers will not display these leading zeros. Instead, the subtraction above yielded . Although it is displayed with 16 digits, only the first 7 are correct.Usually, if you add two numbers of magnitude each with roundoff error , then the result is also of magnitude and the relative error due to roundoff is . In this example, cancellation made the result of magnitude , so the relative error due to roundoff is , and so we lost digits of precision.  This type of loss of precisioncan happen by accident, with catastrophic results, if you are not careful. For example in you will lose precision when gets too small. Try  format long format compact f = @(x) x^2 for i = 1:30 h = 10^(-i) df = (f(1+h)-f(1))\/h relerr = (2-df)\/2 end  At first the relative error decreases since truncation error is reduced. Then loss of precision takes over and the relative error increases to 1. This happens because when and become close, the subtraction ``cancels'' digits.    Bad Conditioning  We encountered bad conditioning in Part II, when we talked about solving linear systems. Bad conditioning means that the problem is unstable in the sense that small input errors can produce large output errors. This can be a problem in a couple of ways. First, the measurements used to get the inputs cannot be completely accurate. Second, the computations along the way have roundoff errors. Errors in the computations near the beginning especially can be magnified by a factor close to the condition number of the matrix. Thus what was a very small problem with roundoff can become a very big problem.  It turns out that matrix equations are not the only place where condition numbers occur. In any problem one can define the condition number as the maximum ratio of the relative errors in the output versus input, i.e. . An easy example is solving a simple equation . Suppose that is close to zero at the solution . Then a very small change in (caused perhaps by an inaccurate measurement of some of the coefficients in ) can cause a large change in . It can be shown that the condition number of this problem is .    Summary       Error type:  Whose fault is it?  How to mitigate it?    Truncation  the method  higher-order method or finer grid    Round-off  the computer  usually okay, higher precision arithmetic    Loss of Precision  the programmer  avoid cancellation of significant digits    Bad Conditioning  the problem  check answers, redesign if possible    A summary of the main sources of error.      Identify the (main) source of error in each case and propose a way to reduce this error if possible.   If we do we should get 3, but if we check  mythree = (sqrt(3))^2  mythree-3  we find the error is ans = -4.4409e-16 .    Since it is a quarter of a circle of radius 2, we should have . We try to use mytrap from and do  x = 0:.2:2;  y = sqrt(4-x.^2);  mypi = mytrap(x,y)  mypi-pi  and find the error is ans = -0.0371 .        From Numerical Linear Algebra by L. Trefethen and D. Bau, SIAM, 1997. The function could be evaluated as written, or first expanded as and then evaluated. To find the expanded version, type  syms x  expand((x-2)^9)  clear  To evaluate it without expansion, type  f1 = @(x) (x-2).^9  x = 1.92:.001:2.08;  y1 = f1(x);  plot(x,y1,'blue')  To do it with expansion, convert the symbolic expansion above to an anonymous function f2 and then type  y2 = f2(x);  hold on  plot(x,y2,'red')  Carefully study the resulting graphs. Should the graphs be the same? Which is more correct? MATLAB does calculations using approximately 16 decimal places. What is the largest error in the graph, and how big is it relative to ? Which source of error is causing this problem?    "
},
{
  "id": "tab-errors",
  "level": "2",
  "url": "sec-main-error.html#tab-errors",
  "type": "Table",
  "number": "3.10.1",
  "title": "A summary of the main sources of error.",
  "body": "     Error type:  Whose fault is it?  How to mitigate it?    Truncation  the method  higher-order method or finer grid    Round-off  the computer  usually okay, higher precision arithmetic    Loss of Precision  the programmer  avoid cancellation of significant digits    Bad Conditioning  the problem  check answers, redesign if possible    A summary of the main sources of error.  "
},
{
  "id": "exercises-main-error-1",
  "level": "2",
  "url": "sec-main-error.html#exercises-main-error-1",
  "type": "Exercise",
  "number": "3.10.6.1",
  "title": "",
  "body": " Identify the (main) source of error in each case and propose a way to reduce this error if possible.   If we do we should get 3, but if we check  mythree = (sqrt(3))^2  mythree-3  we find the error is ans = -4.4409e-16 .    Since it is a quarter of a circle of radius 2, we should have . We try to use mytrap from and do  x = 0:.2:2;  y = sqrt(4-x.^2);  mypi = mytrap(x,y)  mypi-pi  and find the error is ans = -0.0371 .     "
},
{
  "id": "exercises-main-error-2",
  "level": "2",
  "url": "sec-main-error.html#exercises-main-error-2",
  "type": "Exercise",
  "number": "3.10.6.2",
  "title": "",
  "body": "  From Numerical Linear Algebra by L. Trefethen and D. Bau, SIAM, 1997. The function could be evaluated as written, or first expanded as and then evaluated. To find the expanded version, type  syms x  expand((x-2)^9)  clear  To evaluate it without expansion, type  f1 = @(x) (x-2).^9  x = 1.92:.001:2.08;  y1 = f1(x);  plot(x,y1,'blue')  To do it with expansion, convert the symbolic expansion above to an anonymous function f2 and then type  y2 = f2(x);  hold on  plot(x,y2,'red')  Carefully study the resulting graphs. Should the graphs be the same? Which is more correct? MATLAB does calculations using approximately 16 decimal places. What is the largest error in the graph, and how big is it relative to ? Which source of error is causing this problem?  "
},
{
  "id": "sec-chp3-review",
  "level": "1",
  "url": "sec-chp3-review.html",
  "type": "Section",
  "number": "3.11",
  "title": "Review of Chapter 3",
  "body": " Review of Chapter 3   Methods and Formulas   Polynomial Interpolation:  An exact fit to the data. For data points it is a degree polynomial. Only good for very few, accurate data points. The coefficients are found by solving a linear system of equations.    Spline Interpolation:  Fit a simple function between each pair of points. Joining points by line segments is the most simple spline. Cubic is by far the most common and important. Cubic matches derivatives and second derivatives at data points. Simply supported and clamped ends are available. Good for more, but accurate points. The coefficients are found by solving a linear system of equations.    Least Squares:  Makes a close fit of a simple function to all the data. Minimizes the sum of the squares of the errors. Good for noisy data. The coefficients are found by solving a linear system of equations.    Interpolation vs. Extrapolation:  Polynomials, Splines and Least Squares are generally used for Interpolation, fitting between the data. Extrapolation, i.e. making fits beyond the data, is much more tricky. To make predictions beyond the data, you must have knowledge of the underlying process, i.e. what the function should be.    Numerical Integration:   Left Endpoint:   Right Endpoint:  . Trapezoid Rule:  . Midpoint Rule:  .    Numerical Integration Rules with Even Spacing:  For even spacing: where is the number of subintervals, then:        Simpson's rule:     Area of a region:   , where is the counter-clockwise curve around the boundary of the region. We can represent such a curve, by consecutive points on it, i.e.  , and with . Applying the trapezoid method to the integral :     Accuracy of integration rules:  Right and Left endpoint are Trapezoid and Midpoint are Simpson is     Double Integrals on Rectangles:   Centerpoint:  , where  Centerpoint Evenly spaced:   Four corners:   Four Corners Evenly spaced:  where . Double Simpson:  , where .    Integration based on triangles:     Triangulation: Dividing a region up into triangles.    Triangles are suitable for odd-shaped regions.    A triangulation is better if the triangles are nearly equilateral.    Three corners:  where is the average of at the corners of the -th triangle. Area of a triangle with corners , , :    Centerpoint:       Finite Differences   Forward Difference :  Backward Difference :  Central Difference :  Higher order central differences:   Partial Derivatives: Denote .     Sources of error:     Truncation  the method is an approximation.    Roundoff  double precision arithmetic uses significant digits.    Loss of precision  an amplification of roundoff error due to cancellations.    Bad conditioning  the problem is sensitive to input errors.   Error can build up after multiple calculations.  See .     MATLAB   Data Interpolation:  Use the plot command plot(x,y,'*') to plot the data. Use the Basic Fitting tool to make an interpolation or spline. If you choose an degree polynomial with data points the result will be the exact polynomial interpolation. If you select a polynomial degree less than , then MATLAB will produce a least squares approximation.    Functions of 2 Variables and Meshgrids:     f= @(x,y) sin(x.*y).\/sqrt(x+y)  make an anonymous function of and .    [X Y]=meshgrid(-1:.01:2, 0:.01:3)  make a 2-d grid of points.    Z = f(X,Y)  evaluate the function at all points on the grid.    mesh(X,Y,Z) or surf(X,Y,Z)  plot the function on the grid.       Integration:     integral(f,a,b)  Numerical integral of on .    integral2(f,a,b,c,d)  Integral of on .   Example:  f = @(x,y) sin(x.*y)\/sqrt(x+y)  I = integral2(f,0,1,0,2)  MATLAB uses an advanced form of Simpson's method.    Integration over non-rectangles:   Redefine the function to be zero outside the region. For example:  f = @(x,y) sin(x.*y).^3.*(2*x + y <= 2)  I = integral2(f,0,1,0,2)  Integrates on the triangle with corners , , and .   Triangles: MATLAB stores triangulations as a matrix of vertices V and triangles T .   T = delaunay(V) (or delaunay(x,y) )  Produces triangles from vertices.    trimesh(T,x,y)     trimesh(T,x,y,z)     trisurf(T,x,y)     trisurf(T,x,y,z)        Logical expressions   (2*x + y <= 2) , (x.^2+y.^2<=1) are examples of logical expressions. If a logical expression is true it is given the value . If false, then it is assigned the value .    "
},
{
  "id": "sec-reduction",
  "level": "1",
  "url": "sec-reduction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Reduction of Higher Order Equations to Systems",
  "body": " Reduction of Higher Order Equations to Systems   The motion of a pendulum  Consider the motion of an ideal pendulum that consists of a mass attached to an arm of length . If we ignore friction, then Newton's laws of motion tell us , where is the angle of displacement.    Diagram of a pendulum.   A pendulum.   If we also incorporate moving friction and sinusoidal forcing then the equation takes the form . Here is the coefficient of friction and and are the amplitude and frequency of the forcing. Usually, this equation would be rewritten by dividing through by to produce , where . and .  This is a second order ODE because the second derivative with respect to time is the highest derivative. It is nonlinear because it has the term and which is a nonlinear function of the dependent variable . A solution of the equation would be a function . To get a specific solution we need side conditions. Because it is second order, 2 conditions are needed, and the usual conditions are initial conditions .    Converting a general higher order equation  All of the standard methods for solving ordinary differential equations are intended for first order equations. For this reason, it is inconvenient to solve higher order equations numerically. However, most higher-order differential equations that occur in applications can be converted to a system of first order equations and that is what is usually done in practice.  Suppose that an -th order equation can be solved for the -th derivative, i.e. it can be written in the form . Then it can be converted to a first-order system by this standard change of variables: . The resulting first-order system is . In vector form this is simply with for and .  For the example of the pendulum the change of variables has the form , and the resulting equations are . In vector form this is . The initial conditions are converted to .  As stated above, the main reason we wish to change a higher order equation into a system of equations is that this form is convenient for solving the equation numerically. Most general software for solving ODEs (including MATLAB) requires that the ODE be input in the form of a first-order system. In addition, there is a conceptual reason to make the change. In a system described by a higher order equation, knowing the position is not enough to know what the system is doing. In the case of a second order equation, such as the pendulum, one must know both the angle and the angular velocity to know what the pendulum is really doing. We call the pair the state of the system. Generally in applications the vector is the state of the system described by the differential equation.    Using MATLAB to solve a system of ODE's  In MATLAB there are several commands that can be used to solve an initial value problem for a system of differential equations. Each of these correspond to different solving methods. The standard one is ode45 , which uses the algorithm Runge-Kutta 4 5 . We will learn about this algorithm later.  To use ode45 for a system, we have to input the vector function that defines the system, the time span we want to consider and the initial value of the vector y .Suppose we want to solve the pendulum system with and for with initial condition . One way to use ode45 is to enter  dy = @(t,y)[y(2);-.1*y(2)-sin(y(1))+sin(t)]  [T Y] = ode45(dy,[0 20],[1;-1.5]);  Alternatively, we could create a function program  function dy = mypendulum(t,y) dy = [y(2);-.1*y(2)-sin(y(1))+sin(t)] end  and then enter [T Y] = ode45(@mypendulum,[0 20],[1;-1.5]);   The output T contains times and Y contains values of the vector at those times. Try  size(T)  T(1:10)  size(Y)  Y(1:10,:)  Since the first coordinate of the vector is the position (angle), we are mainly interested in its values:  theta = Y(:,1)  plot(T,theta)    In the next two sections we will learn enough about numerical methods for initial value problems to understand roughly how MATLAB produces this approximate solution.     Consider the pendulum system but with no friction or forcing, i.e. . What would equation become in this case? Use the last example to solve the system with the initial condition for . Use the plot of the solution to find the frequency of the pendulum with this initial condition. Do the same for and . How does the frequency depend on the amplitude of a pendulum?    Transform the ODE into a first order system. Suppose the initial conditions for the ODE are , , and .Find a numerical solution of this IVP using ode45 and plot the first coordinate ( ). Try time intervals [1 2] and [1 2.1] and explain what you observe.    "
},
{
  "id": "fig-pendulum",
  "level": "2",
  "url": "sec-reduction.html#fig-pendulum",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "  Diagram of a pendulum.   A pendulum.  "
},
{
  "id": "exercises-reduction-1",
  "level": "2",
  "url": "sec-reduction.html#exercises-reduction-1",
  "type": "Exercise",
  "number": "4.1.4.1",
  "title": "",
  "body": " Consider the pendulum system but with no friction or forcing, i.e. . What would equation become in this case? Use the last example to solve the system with the initial condition for . Use the plot of the solution to find the frequency of the pendulum with this initial condition. Do the same for and . How does the frequency depend on the amplitude of a pendulum?  "
},
{
  "id": "exercises-reduction-2",
  "level": "2",
  "url": "sec-reduction.html#exercises-reduction-2",
  "type": "Exercise",
  "number": "4.1.4.2",
  "title": "",
  "body": " Transform the ODE into a first order system. Suppose the initial conditions for the ODE are , , and .Find a numerical solution of this IVP using ode45 and plot the first coordinate ( ). Try time intervals [1 2] and [1 2.1] and explain what you observe.  "
},
{
  "id": "sec-euler",
  "level": "1",
  "url": "sec-euler.html",
  "type": "Section",
  "number": "4.2",
  "title": "Euler Methods",
  "body": " Euler Methods   Numerical Solution of an IVP  Suppose we wish to numerically solve the initial value problem , on an interval of time .  By a numerical solution, we must mean an approximation of the solution at a finite number of points, i.e. , where and . The first of these points is exactly the initial value. If we take steps as above, and the steps are evenly spaced, then the time change in each step is , and the times are given simply by . This leaves the most important part of finding a numerical solution: determining in a way that is as consistent as possible with . To do this, first write the differential equation in the indexed notation , and then replace the derivative by a difference. There are many ways we might carry this out and in the next section we study the simplest.    The Euler Method  The most straight forward approach is to replace in by its forward difference approximation. This gives . Rearranging this gives us a way to obtain from known as Euler's method: . With this formula, we can start from and compute all the subsequent approximations . This is very easy to implement, as you can see from the following program.   myeuler   function [T , Y] = myeuler(f,tspan,y0,n) % Solves dy\/dt = f(t,y) with initial condition y(a) = y0 % on the interval [a,b] using n steps of Euler's method. % Inputs: f -- a function f(t,y) that returns a column vector the % same length as y % tspan -- a vector [a,b] with the start and end times % y0 -- a column vector of the initial values, y(a) = y0 % n -- number of steps to use % Outputs: T -- a n+1 column vector containing the times % Y -- a (n+1) by d matrix where d is the length of y % Y(j,i) is the ith component of y at time T(j) a = tspan(1); b = tspan(2); % parse starting and ending points h = (b-a)\/n; % step size t = a; T = a; % t is the current time and T will record all times y = y0; % y is the current variable values, as a column vector Y = y0'; % Y will record the values at all steps, each in a row for i = 1:n y = y + h*f(t,y); % Euler update of y. Y = [Y; y']; % y' becomes the next row in Y. t = t + h; % The next time. T = [T; t]; % Record t into T. end end    To use this program we need a function, such as the vector function for the pendulum: dy = @(t,y)[y(2);-.1*y(2)-sin(y(1))+sin(t)] Save this and then type [T Y] = myeuler(dy,[0 20],[1;-1.5],5); Here [0 20] is the time span you want to consider, [1;-1.5] is the initial value of the vector y and 5 is the number of steps. The output T contains times and Y contains values of the vector at the times. Try  size(T)  size(Y)  Since the first coordinate of the vector is the angle, we only plot its values:  theta = Y(:,1);  plot(T,theta)  In this plot it is clear that is not adequate to represent the function. Type hold on then redo the above with 5 replaced by 10. Next try 20, 40, 80, and 200. As you can see the graph becomes increasingly better as increases. We can compare these calculations with MATLAB's built-in function with the commands  [T Y]= ode45(dy,[0 20],[1;-1.5]);  theta = Y(:,1);  plot(T,theta,'r')      The problem with the Euler method  You can think of the Euler method as finding a linear approximate solution to the initial value problem on each time interval. An obvious shortcoming of the method is that it makes the approximation based on information at the beginning of the time interval only. This problem is illustrated well by the following IVP: . You can easily check that the exact solution of this IVP is . If we make the standard change of variables , then we get . Then the solution should be and . If we then plot the solution in the plane, we should get exactly a unit circle. We can solve this IVP with Euler's method:  dy = @(t,y)[y(2);-y(1)]  [T Y] = myeuler(dy,[0 4*pi],[1;0],20)  y1 = Y(:,1);  y2 = Y(:,2);  plot(y1,y2)  As you can see the approximate solution goes far from the true solution. Even if you increase the number of steps, the Euler solution will eventually drift outward away from the circle because it does not take into account the curvature of the solution.    The Modified Euler Method  An idea which is similar to the idea behind the trapezoid method would be to consider at both the beginning and end of the time step and take the average of the two. Doing this produces the Modified (or Improved) Euler method represented by the following equations: . Here captures the information at the beginning of the time step (same as Euler), while is the information at the end of the time step.  A program that implements the Modified method can be downloaded as mymodeuler.m ( ).  Test this program on the IVP above:  [T Ym] = mymodeuler(dy,[0 4*pi],[1;0],20)  ym1 = Ym(:,1);  ym2 = Ym(:,2);  plot(ym1,ym2)  You will find that the results are much better than for the plain Euler method.     Download myeuler.m ( ) and mymodeuler.m ( ).   Type the following commands:  dy = @(t,y) sin(t)*cos(y);  hold on  [T Y] = myeuler(dy,[0,12],.1,20);  plot(T,Y)  Position the plot window so that it can always be seen and type  [T Y] = myeuler(dy,[0,12],.1,30);  plot(T,Y)  (You can use the up button to reduce typing.) Continue to increase the last number in the above until the graph stops changing (as far as you can see). Record this number and print the final graph. Type hold off and kill the plot window.    Follow the same procedure using mymodeuler.m ( ).    Describe what you observed. In particular compare how fast the two methods converge as is increased ( is decreased).       The equation of motion of a damped, unforced pendulum is . The total energy of the pendulum is . Suppose a pendulum has , , , and coefficient of friction , all in SI units. Write a well-commented script program that uses the Modified Euler's method with to simulate the movement of the pendulum from a starting position of until the energy falls below 0.01 Joules (use a while loop). Record the steps in matrices Y and T and plot the motion. Turn in your program and plot.    "
},
{
  "id": "prg-myeuler",
  "level": "2",
  "url": "sec-euler.html#prg-myeuler",
  "type": "Program",
  "number": "4.2.1",
  "title": "myeuler",
  "body": " myeuler   function [T , Y] = myeuler(f,tspan,y0,n) % Solves dy\/dt = f(t,y) with initial condition y(a) = y0 % on the interval [a,b] using n steps of Euler's method. % Inputs: f -- a function f(t,y) that returns a column vector the % same length as y % tspan -- a vector [a,b] with the start and end times % y0 -- a column vector of the initial values, y(a) = y0 % n -- number of steps to use % Outputs: T -- a n+1 column vector containing the times % Y -- a (n+1) by d matrix where d is the length of y % Y(j,i) is the ith component of y at time T(j) a = tspan(1); b = tspan(2); % parse starting and ending points h = (b-a)\/n; % step size t = a; T = a; % t is the current time and T will record all times y = y0; % y is the current variable values, as a column vector Y = y0'; % Y will record the values at all steps, each in a row for i = 1:n y = y + h*f(t,y); % Euler update of y. Y = [Y; y']; % y' becomes the next row in Y. t = t + h; % The next time. T = [T; t]; % Record t into T. end end   "
},
{
  "id": "exercises-euler-1",
  "level": "2",
  "url": "sec-euler.html#exercises-euler-1",
  "type": "Exercise",
  "number": "4.2.5.1",
  "title": "",
  "body": " Download myeuler.m ( ) and mymodeuler.m ( ).   Type the following commands:  dy = @(t,y) sin(t)*cos(y);  hold on  [T Y] = myeuler(dy,[0,12],.1,20);  plot(T,Y)  Position the plot window so that it can always be seen and type  [T Y] = myeuler(dy,[0,12],.1,30);  plot(T,Y)  (You can use the up button to reduce typing.) Continue to increase the last number in the above until the graph stops changing (as far as you can see). Record this number and print the final graph. Type hold off and kill the plot window.    Follow the same procedure using mymodeuler.m ( ).    Describe what you observed. In particular compare how fast the two methods converge as is increased ( is decreased).     "
},
{
  "id": "exr-eulerpendulum",
  "level": "2",
  "url": "sec-euler.html#exr-eulerpendulum",
  "type": "Exercise",
  "number": "4.2.5.2",
  "title": "",
  "body": " The equation of motion of a damped, unforced pendulum is . The total energy of the pendulum is . Suppose a pendulum has , , , and coefficient of friction , all in SI units. Write a well-commented script program that uses the Modified Euler's method with to simulate the movement of the pendulum from a starting position of until the energy falls below 0.01 Joules (use a while loop). Record the steps in matrices Y and T and plot the motion. Turn in your program and plot.  "
},
{
  "id": "sec-higher-order",
  "level": "1",
  "url": "sec-higher-order.html",
  "type": "Section",
  "number": "4.3",
  "title": "Higher Order Methods",
  "body": " Higher Order Methods   The order of a method  For numerical solutions of an initial value problem there are two ways to measure the error. The first is the error of each step. This is called the Local Truncation Error or LTE. The other is the total error for the whole interval . We call this the Global Truncation Error or GTE.  For the Euler method the LTE is of order , i.e. the error is comparable to . We can show this directly using Taylor's Theorem: for some between and . In this equation we can replace by , which makes the first two terms of the right hand side be exactly the Euler method. The error is then or . It would be slightly more difficult to show that the LTE of the modified Euler method is , an improvement of one power of .  We can roughly get the GTE from the LTE by considering the number of steps times the LTE. For any method, if is the interval and is the step size, then is the number of steps. Thus for any method, the GTE is one power lower in than the LTE. Thus the GTE for Euler is and for modified Euler it is .  By the order of a method, we mean the power of in the GTE. Thus the Euler method is a 1st order method and modified Euler is a 2nd order method.    Fourth Order Runge-Kutta  The most famous of all IVP methods is the classic Runge-Kutta method of order 4: . Notice that this method uses values of at different points. In general a method needs values of to achieve order . The constants used in this method and other methods are obtained from Taylor's Theorem. They are precisely the values needed to make all error terms cancel up to .    Variable Step Size and RK45  If the order of a method is , then the GTE is comparable to , which means it is approximately , where is some constant. However, for different differential equations, the values of may be very different. Thus it is not easy beforehand to tell how small should be to get the error within a given tolerence. For instance, if the true solution oscillates very rapidly, we will obviously need a smaller step size than for a solution that is nearly constant.  How can a program then choose small enough to produce the required accuracy? We also do not wish to make much smaller than necessary, since that would increase the number of steps. To accomplish this a program tries an and tests to see if that is small enough. If not it tries again with a smaller . If it is too small, it accepts that step, but on the next step it tries a larger . This process is called variable step size .  Deciding if a single step is accurate enough could be accomplished in several ways, but the most common are called embedded methods . The Runge-Kutta 45 method, which is used in ode45 , is an embedded method. In the RK45, the function is evaluated at different points. These are used to make a 5th order estimate . At the same time, 4 of the 5 values are used to also get a 4th order estimate. If the 4th order and 5th order estimates are close, then we can conclude that they are accurate. If there is a large discrepency, then we can conclude that they are not accurate and a smaller should be used.  To see variable step size in action, we will define and solve two different ODEs and solve them on the same interval. Create this script and run it:  % illustrates variable step size in RK45 dy1 = @(t,y) [-y(2);y(1)]; % create two ODE IVPs dy2 = @(t,y) [-5*y(2);5*y(1)]; [T1 Y1] = ode45(dy1,[0 20],[1;0]); % solve with ode45 [T2 Y2] = ode45(dy2,[0 20],[1;0]); y1 = Y1(:,1); % extract position variables y2 = Y2(:,1); plot(T1,y1,'bx-') % plot both together hold on plot(T2,y2,'ro-') size(T1) % print number of steps used size(T2) hold off      Why order matters  Many people would conclude on first encounter that the advantage of a higher order method would be that you can get a more accurate answer than for a lower order method. In reality, this is not quite how things work. In engineering problems, the accuracy needed is usually a given and it is usually not extremely high. Thus getting more and more accurate solutions is not very useful. So where is the advantage? Consider the following example.  Suppose that you need to solve an IVP with an error of less than . If you use the Euler method, which has GTE of order , then you would need . So you would need about steps to find the solution.  Suppose you use the second order, modified Euler method. In that case the GTE is , so you would need to use , or . This would require about steps. That is a hundred times fewer steps than you would need to get the same accuracy with the Euler method.  If you use the RK4 method, then needs to be approximately , and so . This means you need only about steps to solve the problem, i.e. a thousand times fewer steps than for the Euler method.  Thus the real advantage of higher order methods is that they can run a lot faster at the same accuracy. This can be especially important in applications where one is trying to make real-time adjustments based on the calculations. Such is often the case in robots and other applications with dynamic controls.     There is a Runge-Kutta 2 method, which is also known as the midpoint method. It is summarized by the following equations: .   Modify the program mymodeuler ( ) into a program myRK2 that does the RK2 method.    Test myRK2 and mymodeuler ( ) on the following IVP with time span : . Using format long , make a table with for each of the two programs for , 100, and 1000. Compute the difference between and the true solution .   Turn in the modified program and a summary of the results.    Consider the initial value problem    Find the exact solution by hand using Separation of Variables.    Solve it by hand using Euler's method with on the interval .    Solve it using ode45 on the interval .    Plot all three solutions on in a single plot. Use a continuous curve for the exact solution and symbols at the data points for the approximate solutions (e.g. '*' for Euler, 'd' for ode45 ).    Rank steps (a) - (d) from easiest to hardest.   Turn in your hand work, the plot and your answer to (e).    "
},
{
  "id": "exercises-higher-order-1",
  "level": "2",
  "url": "sec-higher-order.html#exercises-higher-order-1",
  "type": "Exercise",
  "number": "4.3.5.1",
  "title": "",
  "body": " There is a Runge-Kutta 2 method, which is also known as the midpoint method. It is summarized by the following equations: .   Modify the program mymodeuler ( ) into a program myRK2 that does the RK2 method.    Test myRK2 and mymodeuler ( ) on the following IVP with time span : . Using format long , make a table with for each of the two programs for , 100, and 1000. Compute the difference between and the true solution .   Turn in the modified program and a summary of the results.  "
},
{
  "id": "exercises-higher-order-2",
  "level": "2",
  "url": "sec-higher-order.html#exercises-higher-order-2",
  "type": "Exercise",
  "number": "4.3.5.2",
  "title": "",
  "body": " Consider the initial value problem    Find the exact solution by hand using Separation of Variables.    Solve it by hand using Euler's method with on the interval .    Solve it using ode45 on the interval .    Plot all three solutions on in a single plot. Use a continuous curve for the exact solution and symbols at the data points for the approximate solutions (e.g. '*' for Euler, 'd' for ode45 ).    Rank steps (a) - (d) from easiest to hardest.   Turn in your hand work, the plot and your answer to (e).  "
},
{
  "id": "sec-ODE-BVP",
  "level": "1",
  "url": "sec-ODE-BVP.html",
  "type": "Section",
  "number": "4.4",
  "title": "ODE Boundary Value Problems and Finite Differences",
  "body": " ODE Boundary Value Problems and Finite Differences   Steady State Heat and Diffusion  If we consider the movement of heat in a long thin object (like a metal bar), it is known that the temperature, , at a location and time satisfies the partial differential equation , where is the effect of any external heat source. The same equation also describes the diffusion of a chemical in a one-dimensional environment. For example the environment might be a canal, and then would represent how a chemical is introduced.  Sometimes we are interested only in the steady state of the system, supposing and . In this case . This is a linear second-order ordinary differential equation. We could find its solution exactly if is not too complicated. If the environment or object we consider has length , then typically one would have conditions on each end of the object, such as , . Thus instead of an initial value problem, we have a boundary value problem or BVP .    Beam With Tension  Consider a simply supported beam with modulus of elasticity , moment of inertia , a uniform load , and end tension (see ). If denotes the deflection at each point in the beam, then satisfies the differential equation , with boundary conditions . This equation is nonlinear and there is no hope to solve it exactly. If the deflection is small then is negligible compared to 1 and the equation approximately simplifies to . This is a linear equation and we can find the exact solution. We can rewrite the equation as , where , and then the exact solution is .    Schematic of a beam.   A simply supported beam with a uniform load and end tension .     Finite Difference Method Linear ODE  A finite difference equation is an equation obtained from a differential equation by replacing the variables by their discrete versions and derivatives by difference formulas.  First we will consider equation . Suppose that the beam is a W12x22 structural steel I-beam. Then in., and . Suppose that the beam is carrying a uniform load of lb. so that and a tension of lb.. We calculate from  and . Thus we have the following BVP: . First subdivide the interval into four equal subintervals. The nodes of this subdivion are , , , , . We will then let denote the deflections at the nodes. From the boundary conditions we have immediately: . To determine the deflections at the interior points we will rely on the differential equation. Recall the central difference formula . In this case we have . Replacing all the variables in the equation by their discrete versions we get . Substituting in for , and we obtain: . This equation makes sense for . At , the equation becomes: . Note that this equation is linear in the unknowns and . At we have: . At we have (since ) . Thus is the solution of the linear system: . We can easily find the solution of this system in MATLAB:  A = [ -2.002565 1 0 ; 1 -2.002565 1 ; 0 1 -2.002565]  b = [ 3.46275 4.617 3.46275 ]'  y = A  To graph the solution, we need define the values and add on the values at the endpoints:  x = 0:30:120  y = [0 ; y ; 0]  plot(x,y,'d')  Adding a spline will result in an excellent graph.  The exact solution of this BVP is given in . That equation, with the parameter values for the W12x22 I-beam as in the example, is in the program myexactbeam.m ( ). We can plot the true solution on the same graph:  hold on  myexactbeam  Thus our numerical solution is extremely good considering how few subintervals we used and how very large the deflection is.  An amusing exercise is to set in the program myexactbeam.m ( ); the program fails because the exact solution is no longer valid. Also try for which you will observe loss of precision. On the other hand the finite difference method still works when we set .     Derive the finite difference equations for the BVP on the same domain ( ), but with eight subintervals and solve (using MATLAB) as in the example. Plot your result, together on the same plot with the exact solution from the program myexactbeam.m ( ).    By replacing and with central differences, derive the finite difference equation for the boundary value problem using 5 subintervals. Solve them and plot the solution using MATLAB.    "
},
{
  "id": "fig-beam",
  "level": "2",
  "url": "sec-ODE-BVP.html#fig-beam",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "  Schematic of a beam.   A simply supported beam with a uniform load and end tension .  "
},
{
  "id": "exercises-ODE-BVP-1",
  "level": "2",
  "url": "sec-ODE-BVP.html#exercises-ODE-BVP-1",
  "type": "Exercise",
  "number": "4.4.4.1",
  "title": "",
  "body": " Derive the finite difference equations for the BVP on the same domain ( ), but with eight subintervals and solve (using MATLAB) as in the example. Plot your result, together on the same plot with the exact solution from the program myexactbeam.m ( ).  "
},
{
  "id": "exercises-ODE-BVP-2",
  "level": "2",
  "url": "sec-ODE-BVP.html#exercises-ODE-BVP-2",
  "type": "Exercise",
  "number": "4.4.4.2",
  "title": "",
  "body": " By replacing and with central differences, derive the finite difference equation for the boundary value problem using 5 subintervals. Solve them and plot the solution using MATLAB.  "
},
{
  "id": "sec-FD-NODE",
  "level": "1",
  "url": "sec-FD-NODE.html",
  "type": "Section",
  "number": "4.5",
  "title": "Finite Difference Method – Nonlinear ODE",
  "body": " Finite Difference Method Nonlinear ODE   Heat conduction with radiation  If we again consider the heat in a metal bar of length , but this time consider the effect of radiation as well as conduction, then the steady state equation has the form , where is the temperature of the background, incorporates a coefficient of radiation and is the heat source.  If we again replace the continuous problem by its discrete approximation then we get . This equation is nonlinear in the unknowns, thus we no longer have a system of linear equations to solve, but a system of nonlinear equations. One way to solve these equations would be by the multivariable Newton method in . Instead, we introduce another iterative method.    Relaxation Method for Nonlinear Finite Differences  We can rewrite equation as . From this we can solve for in terms of the other quantities: . Next we add to both sides of the equation to obtain , and then divide by 3 to get .  Now for the main idea, we will begin with an initial guess for the value of for each , which we can represent as a vector . Then we will use the above equation to get better estimates, , , , and hope that they converge to the correct answer.  If we let denote the th approximation, then we can obtain that st estimate from the formula . Notice that and do not change. In the resulting equation, we have at each successive step depending on its previous value and the equation itself.    Implementing the Relaxation Method  In the following program we solve the finite difference equations ( ) with the boundary conditions and . We let , , , and . Notice that the vector u always contains the current estimate of the values of .   mynonlinheat   % mynonlinheat (lacks comments) % Purpose: L = 4; % n = 4; % h = L\/n; % hh = h^2\/3; % u0 = 0; % uL = 0; % ub = .5; % ub4 = ub^4; % x = 0:h:L; % g = sin(pi*x\/4); % u = zeros(1,n+1); % steps = 4; % u(1)=u0; % u(n+1)=uL; % for j = 1:steps % u(2:n) = (u(3:n+1)+u(2:n)+u(1:n-1))\/3 + hh*(-u(2:n).^4+ub4+g(2:n)); end plot(x,u)    If you run this program with the given n and steps the result will not seem reasonable.  We can plot the initial guess by adding the command plot(x,u) right before the for loop. We can also plot successive iterations by moving the last plot(x,u) before the end . Now we can experiment and see if the iteration is converging. Try various values of and to produce a good plot. You will notice that this method converges quite slowly. In particular, as we increase , we need to increase like , i.e. if is large then steps needs to be really large.     Modify the script program mynonlinheat ( ) to plot the initial guess and all intermediate approximations. Add complete comments to the program. Print the program and a plot using and steps large enough to see convergence.    Modify your improved mynonlinheat to mynonlinheattwo that has the boundary conditions . Fix the comments to reflect the new boundary conditions. Print the program and a plot using and large enough steps to see convergence.    "
},
{
  "id": "prg-mynonlinheat",
  "level": "2",
  "url": "sec-FD-NODE.html#prg-mynonlinheat",
  "type": "Program",
  "number": "4.5.1",
  "title": "mynonlinheat",
  "body": " mynonlinheat   % mynonlinheat (lacks comments) % Purpose: L = 4; % n = 4; % h = L\/n; % hh = h^2\/3; % u0 = 0; % uL = 0; % ub = .5; % ub4 = ub^4; % x = 0:h:L; % g = sin(pi*x\/4); % u = zeros(1,n+1); % steps = 4; % u(1)=u0; % u(n+1)=uL; % for j = 1:steps % u(2:n) = (u(3:n+1)+u(2:n)+u(1:n-1))\/3 + hh*(-u(2:n).^4+ub4+g(2:n)); end plot(x,u)   "
},
{
  "id": "exercises-FD-NODE-1",
  "level": "2",
  "url": "sec-FD-NODE.html#exercises-FD-NODE-1",
  "type": "Exercise",
  "number": "4.5.4.1",
  "title": "",
  "body": " Modify the script program mynonlinheat ( ) to plot the initial guess and all intermediate approximations. Add complete comments to the program. Print the program and a plot using and steps large enough to see convergence.  "
},
{
  "id": "exercises-FD-NODE-2",
  "level": "2",
  "url": "sec-FD-NODE.html#exercises-FD-NODE-2",
  "type": "Exercise",
  "number": "4.5.4.2",
  "title": "",
  "body": " Modify your improved mynonlinheat to mynonlinheattwo that has the boundary conditions . Fix the comments to reflect the new boundary conditions. Print the program and a plot using and large enough steps to see convergence.  "
},
{
  "id": "sec-parabolic-explicit",
  "level": "1",
  "url": "sec-parabolic-explicit.html",
  "type": "Section",
  "number": "4.6",
  "title": "Parabolic PDEs - Explicit Method",
  "body": " Parabolic PDEs - Explicit Method   Heat Flow and Diffusion  In the previous sections we studied PDE that represent steady-state heat problem. There was no time variable in the equation. In this section we begin to study how to solve equations that involve time, i.e. we calculate temperature profiles that are changing.  The conduction of heat and diffusion of a chemical happen to be modeled by the same differential equation. The reason for this is that they both involve similar processes. Heat conduction occurs when hot, fast moving molecules bump into slower molecules and transfer some of their energy. In a solid this involves moles of molecules all moving in different, nearly random ways, but the net effect is that the energy eventually spreads itself out over a larger region. The diffusion of a chemical in a gas or liquid simliarly involves large numbers of molecules moving in different, nearly random ways. These molecules eventually spread out over a larger region.  In three dimensions, the equation that governs both of these processes is the heat\/diffusion equation , where is the coefficient of conduction or diffusion, and . The symbol in this context is called the Laplacian. If there is also a heat\/chemical source, then it is incorporated a function in the equation as .  In some problems the dimension is irrelevant, either because the object in question is very thin, or does not change in the direction. In this case the equation is . Finally, in some cases only the direction matters. In this case the equation is just , or .  In this section we will learn a straight-forward technique for solving and . It is very similar to the finite difference method we used for nonlinear boundary value problems.  It is worth mentioning a related equation , which is called the porous-media equation. This equation models diffusion in a solid, but porous, material, such as sandstone or an earthen structure. We will not solve this equation numerically, but the methods introduced here would work. Many equations that involve 1 time derivative and 2 spatial derivatives are parabolic and the methods introduced here will work for most of them.    Explicit Method Finite Differences  The one dimensional heat\/diffusion equation , has two independent variables, and , and so we have to discretize both. Since we are considering , we subdivide into equal subintervals, i.e. let and . Similarly, if we are interested in solving the equation on an interval of time , let and . We will then denote the approximate solution at the grid points by .  The equation can then be replaced by the difference equations . Here we have used the forward difference for and the central difference for . This equation can be solved for to produce for , , where . The formula allows us to calculate all the values of at step using the values at step .  Notice that depends on , and . That is at grid point depends on its previous value and the values of its two nearest neighbors at the previous step (see ).    Schematic of information flow for the explicit method.   The value at grid point depends on its previous value and the previous values of its nearest neighbors.     Initial Condition  To solve the partial differential equation or we need an initial condition. This represents the state of the system when we begin, i.e. the initial temperature distribution or initial concentration profile. This is represented by . To implement this in a program we let .    Boundary Conditions  To solve the partial differential equation ( ) or ( ) we also need boundary conditions. Just as in the previous section we will have to specify something about the ends of the domain, i.e. at and . One possibility is fixed boundary conditions, which we can implement just as we did for the ODE boundary value problem.  A second possibility is called variable boundary conditions . This is represented by time-dependent functions, . In a heat problem, and would represent heating or cooling applied to the ends. These are easily implemented in a program by letting and .    Implementation  The following program implements the explicit method. It incorporates variable boundary conditions at both ends. To run it you must define functions , and . Notice that the main loop has only one line. The values of are kept as a matrix. It is often convenient to define a matrix of the right dimension containing all zeros, and then fill in the calculated values as the program runs.   myheat   function [t x u] = myheat(f,g1,g2,L,T,m,n,c) % function [t x u] = myheat(f,g1,g2,L,T,m,n,c) % solve u_t = c u_xx for 0<=x<=L, 0<=t<=T % BC: u(0, t) = g1(t); u(L,t) = g2(t) % IC: u(x, 0) = f(x) % Inputs: % f -- function for IC % g1,g2 -- functions for BC % L -- length of rod % T -- length of time interval % m -- number of subintervals for x % n -- number of subintervals for t % c -- rate constant in equation % Outputs: % t -- vector of time points % x -- vector of x points % u -- matrix of the solution, u(i,j)~=u(x(i),t(j)) % Also plots. h = L\/m; k = T\/n; % set space and time step sizes r = c*k\/h^2; rr = 1 - 2*r; x = linspace(0,L,m+1); % set space discretization t = linspace(0,T,n+1); % set time discretization %Set up the matrix for u: u = zeros(m+1,n+1); % evaluate initial conditions u(:,1) = f(x); % evaluate boundary conditions u(1,:) = g1(t); u(m+1,:) = g2(t); % find solution at remaining time steps for j = 1:n % explict method update at next time u(2:m,j+1) = r*u(1:m-1,j) + rr*u(2:m,j) + r*u(3:m+1,j); end % plot the results mesh(x,t,u') end    Run the following program using , , , , and . You will find that simply g1 = @(t) 0 will not work, because it will only produce a single number . Instead use g1 = @(t) 0*t , which will produce the needed vector of zeros.     Run the program myheat.m ( ) with , , , , and . Set and experiment with . Get a plot when the program is stable and one when it isn't. Turn in the plots. Hint: The function will need to be input using the formula g2 = @(t) 0*t .    Make a version of the program myheat.m ( ) that does not input or but instead has inputs:  % k -- size of the time steps % temp -- keeps stepping in time until the maximum current % temperature in the bar is less than temp  For , , , , and , set so that the method will be stable. Run it with temp = 20 . (Hint: see your as a model.) When does the temperature in the bar drop below 20? Turn in your program and the plot.    "
},
{
  "id": "fig-expheat",
  "level": "2",
  "url": "sec-parabolic-explicit.html#fig-expheat",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": "  Schematic of information flow for the explicit method.   The value at grid point depends on its previous value and the previous values of its nearest neighbors.  "
},
{
  "id": "prg-myheat",
  "level": "2",
  "url": "sec-parabolic-explicit.html#prg-myheat",
  "type": "Program",
  "number": "4.6.2",
  "title": "myheat",
  "body": " myheat   function [t x u] = myheat(f,g1,g2,L,T,m,n,c) % function [t x u] = myheat(f,g1,g2,L,T,m,n,c) % solve u_t = c u_xx for 0<=x<=L, 0<=t<=T % BC: u(0, t) = g1(t); u(L,t) = g2(t) % IC: u(x, 0) = f(x) % Inputs: % f -- function for IC % g1,g2 -- functions for BC % L -- length of rod % T -- length of time interval % m -- number of subintervals for x % n -- number of subintervals for t % c -- rate constant in equation % Outputs: % t -- vector of time points % x -- vector of x points % u -- matrix of the solution, u(i,j)~=u(x(i),t(j)) % Also plots. h = L\/m; k = T\/n; % set space and time step sizes r = c*k\/h^2; rr = 1 - 2*r; x = linspace(0,L,m+1); % set space discretization t = linspace(0,T,n+1); % set time discretization %Set up the matrix for u: u = zeros(m+1,n+1); % evaluate initial conditions u(:,1) = f(x); % evaluate boundary conditions u(1,:) = g1(t); u(m+1,:) = g2(t); % find solution at remaining time steps for j = 1:n % explict method update at next time u(2:m,j+1) = r*u(1:m-1,j) + rr*u(2:m,j) + r*u(3:m+1,j); end % plot the results mesh(x,t,u') end   "
},
{
  "id": "exercises-parabolic-explicit-1",
  "level": "2",
  "url": "sec-parabolic-explicit.html#exercises-parabolic-explicit-1",
  "type": "Exercise",
  "number": "4.6.6.1",
  "title": "",
  "body": " Run the program myheat.m ( ) with , , , , and . Set and experiment with . Get a plot when the program is stable and one when it isn't. Turn in the plots. Hint: The function will need to be input using the formula g2 = @(t) 0*t .  "
},
{
  "id": "exercises-parabolic-explicit-2",
  "level": "2",
  "url": "sec-parabolic-explicit.html#exercises-parabolic-explicit-2",
  "type": "Exercise",
  "number": "4.6.6.2",
  "title": "",
  "body": " Make a version of the program myheat.m ( ) that does not input or but instead has inputs:  % k -- size of the time steps % temp -- keeps stepping in time until the maximum current % temperature in the bar is less than temp  For , , , , and , set so that the method will be stable. Run it with temp = 20 . (Hint: see your as a model.) When does the temperature in the bar drop below 20? Turn in your program and the plot.  "
},
{
  "id": "sec-instability-explicit",
  "level": "1",
  "url": "sec-instability-explicit.html",
  "type": "Section",
  "number": "4.7",
  "title": "Solution Instability for the Explicit Method",
  "body": " Solution Instability for the Explicit Method   As we saw in experiments using myheat.m ( ), the solution can become unbounded unless the time steps are small. In this section we consider why.    Writing the Difference Equations in Matrix Form  If we use the boundary conditions then the explicit method of the previous section has the form , where and . This is equivalent to the matrix equation , where is the column vector representing the state at the th time step and is the matrix .  Unfortunately, this matrix can have a property which is very bad in this context. Namely, it can cause exponential growth of error unless is small. To see how this happens, suppose that is the vector of correct values of at time step and is the error of the approximation , then . From , the approximation at the next time step will be , and if we continue for steps, . The problem with this is the term . This term is exactly what we would do in the power method for finding the eigenvalue of with the largest absolute value. If the matrix has eigenvalues with absolute value greater than , then this term will grow exponentially. shows the largest absolute value of an eigenvalue of as a function of the parameter for various sizes of the matrix . As you can see, for the largest absolute eigenvalue grows rapidly for any and quickly becomes greater than .    Plot of spectra for the explicit method.   Maximum absolute eigenvalue as a function of for the matrix from the explicit method for the heat equation calculated for matrices of sizes . Whenever the maximum absolute eigenvalue is greater than 1 the method is unstable, i.e. errors grow exponentially with each step. When using the explicit method is a safe choice.     Consequences  Recall that . Since this must be less than 1\/2, we have . The first consequence is obvious: must be relatively small.The second is that cannot be too small. Since appears in the formula, making small would force to be extremely small!A third consequence is that we have a converse of this analysis. Suppose . Then all the eigenvalues will be less than one. Recall that the error terms satisfy . If all the eigenvalues of are less than in absolute value then grows smaller and smaller as increases. This is really good. Rather than building up, the effect of any error diminishes as time passes! From this we arrive at the following principle: If the explicit numerical solution for a parabolic equation does not blow up, then errors from previous steps fade away!   Finally, we note that if we have non-zero boundary conditions then instead of equation ( ) we have , where the first and last entries of contain the boundary conditions and all the other entries are zero. In this case the errors behave just as before, if then the errors grow and if the errors fade away.  We can write a function program myexpmatrix.m that produces the matrix in , for given inputs and . Without using loops we can use the diag command to set up the matrix:   myexpmatrix   function A = myexpmatrix(m,r) % produces the matrix for the explicit method for a parabolic equation % Inputs: m -- the size of the matrix % r -- the main parameter, ck\/h^2 % Output: A -- an m by m matrix u = (1-2*r)*ones(m,1); % make a vector for the main diagonal v = r*ones(m-1,1); % make a vector for the upper and lower diagonals A = diag(u) + diag(v,1) + diag(v,-1); % assemble end    Test this using and . Check the eigenvalues and eigenvectors of the resulting matirices:  A = myexpmatrix(6,.6)  [v e] = eig(A)  What is the mode represented by the eigenvector with the largest absolute eigenvalue? How is that reflected in the unstable solutions?     Let , , , , , , and , as used in the program myheat.m ( ). What value of corresponds to ? Try different in myheat.m to find precisely when the method works and when it fails. Is the boundary between failure and success? Hand in a plot of the last success and the first failure. Include the values of and in each.    Write a well-commented MATLAB script program that produces the graph in for . Your program should:   define values from to ,    for each    create the matrix by calling myexpmatrix ( ),    calculate the eigenvalues of ,    find the max of the absolute values, and       plot these numbers versus .       "
},
{
  "id": "fig-heatspec",
  "level": "2",
  "url": "sec-instability-explicit.html#fig-heatspec",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": "  Plot of spectra for the explicit method.   Maximum absolute eigenvalue as a function of for the matrix from the explicit method for the heat equation calculated for matrices of sizes . Whenever the maximum absolute eigenvalue is greater than 1 the method is unstable, i.e. errors grow exponentially with each step. When using the explicit method is a safe choice.  "
},
{
  "id": "prg-myexpmatrix",
  "level": "2",
  "url": "sec-instability-explicit.html#prg-myexpmatrix",
  "type": "Program",
  "number": "4.7.2",
  "title": "myexpmatrix",
  "body": " myexpmatrix   function A = myexpmatrix(m,r) % produces the matrix for the explicit method for a parabolic equation % Inputs: m -- the size of the matrix % r -- the main parameter, ck\/h^2 % Output: A -- an m by m matrix u = (1-2*r)*ones(m,1); % make a vector for the main diagonal v = r*ones(m-1,1); % make a vector for the upper and lower diagonals A = diag(u) + diag(v,1) + diag(v,-1); % assemble end   "
},
{
  "id": "exercises-instability-explicit-1",
  "level": "2",
  "url": "sec-instability-explicit.html#exercises-instability-explicit-1",
  "type": "Exercise",
  "number": "4.7.3.1",
  "title": "",
  "body": " Let , , , , , , and , as used in the program myheat.m ( ). What value of corresponds to ? Try different in myheat.m to find precisely when the method works and when it fails. Is the boundary between failure and success? Hand in a plot of the last success and the first failure. Include the values of and in each.  "
},
{
  "id": "exr-myexpmatrix",
  "level": "2",
  "url": "sec-instability-explicit.html#exr-myexpmatrix",
  "type": "Exercise",
  "number": "4.7.3.2",
  "title": "",
  "body": " Write a well-commented MATLAB script program that produces the graph in for . Your program should:   define values from to ,    for each    create the matrix by calling myexpmatrix ( ),    calculate the eigenvalues of ,    find the max of the absolute values, and       plot these numbers versus .     "
},
{
  "id": "sec-implicit-methods",
  "level": "1",
  "url": "sec-implicit-methods.html",
  "type": "Section",
  "number": "4.8",
  "title": "Implicit Methods",
  "body": " Implicit Methods   The Implicit Difference Equations  By approximating and at rather than , and using a backwards difference for , the equation is approximated by . Note that all the terms have index except one and isolating this term leads to , where as before. The entries involved in are illustrated in .    Schematic of information flow for the implicit method.   The value at grid point depends on its future value and the future values of its nearest neighbors.   Now we have given in terms of . This seems like a problem, since is the solution at a later time than , so we could never know before we knew . However, the relationship between and is linear. Using matrix notation, we have , where represents the boundary conditions. Thus to find from , we need only solve the linear system , where and are given and . (This is an example of how a sparse matrix occurs in applications.) Using this scheme is called the implicit method since is defined implicitly. Since we have to solve a linear system at each step, the implicit method requires more work per step than the explicit method.  Since we are solving , the most important quantity is the maximum absolute eigenvalue of , which is 1 divided by the smallest eigenvalue of . shows the maximum absolute eigenvalues of as a function of for various size matrices.    Plot of spectra for the eimplicit method.   Maximum absolute eigenvalue as a function of for the matrix from the implicit method for the heat equation calculated for matrices of sizes . Whenever the maximum absolute eigenvalue is less than 1 the method is stable, i.e. it is always stable.   Notice that this absolute maximum is always less than . Thus errors are always diminished over time and so this method is always stable. For the same reason it is also always as accurate as the individual steps.  Both this implicit method and the explicit method in the previous section make error in approximating and error in approximating , so they have total error . Thus although the stability condition allows the implicit method to use arbitrarily large , to maintain accuracy we still need .    Crank-Nicholson Method  Now that we have two different methods for solving parabolic equation, it is natural to ask, can we improve by taking an average of the two methods? The answer is yes.  We implement a weighted average of the two methods by considering an average of the approximations of at and . This leads to the equations . The implicit method contained in these equations is called the Crank-Nicholson method . Gathering terms yields the equations . In matrix notation this is , where and . In this equation and are known, can be calculated directly, and then the equation is solved for .  If we choose , then we are in effect doing a central difference for , which has error . Our total error is then . With a bit of work, we can show that the method is always stable, and so we can use without a problem.  To get optimal accuracy with a weighted average, it is always necessary to use the right weights. For the Crank-Nicholson method with a given , we need to choose . This choice will make the method have truncation error of order , which is really good considering that the implicit and explicit methods each have truncation errors of order . Surprisingly, we can do even better if we also require , and, consequently, . With these choices, the method has truncation error of order , which is absolutely amazing.  To appreciate the implications, suppose that we need to solve a problem with 4 significant digits. If we use the explicit or implicit method alone then we will need . If and , then we need and . Thus we would have a total of grid points, almost all in the interior. This is a lot.  Next suppose we solve the same problem using the optimal Crank-Nicholson method. We would need which would require us to take , so we would take and have . For we need . If , this gives so we would need to get . This gives us a total of interior grid points, or, a factor of fewer than the explicit or implicit method alone.     Modify the program myexpmatrix.m ( ) into a function program myimpmatrix.m that produces the matrix in for given inputs and . Modify your script from to use and to plot for ; keep . It should produce a graph similar to that in for . Turn in the programs and the plot.    Modify the program myheat ( ) into a new program myimplicitheat that uses the implicit method to solve the boundary value problem by repeatedly solving the system for each time step.  (Hints: Delete g1 and g2 from the program since they are always zero. Call using myimpmatrix before the loop and solve inside the loop.)  Run the program with , , and and at least 10 pairs of values of and . Turn in the program and a list of the you tried and whether the simulation was stable or unstable. Are you convinced that it is always stable?    "
},
{
  "id": "fig-impheat",
  "level": "2",
  "url": "sec-implicit-methods.html#fig-impheat",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": "  Schematic of information flow for the implicit method.   The value at grid point depends on its future value and the future values of its nearest neighbors.  "
},
{
  "id": "fig-impheatspec",
  "level": "2",
  "url": "sec-implicit-methods.html#fig-impheatspec",
  "type": "Figure",
  "number": "4.8.2",
  "title": "",
  "body": "  Plot of spectra for the eimplicit method.   Maximum absolute eigenvalue as a function of for the matrix from the implicit method for the heat equation calculated for matrices of sizes . Whenever the maximum absolute eigenvalue is less than 1 the method is stable, i.e. it is always stable.  "
},
{
  "id": "exercises-implicit-methods-1",
  "level": "2",
  "url": "sec-implicit-methods.html#exercises-implicit-methods-1",
  "type": "Exercise",
  "number": "4.8.3.1",
  "title": "",
  "body": " Modify the program myexpmatrix.m ( ) into a function program myimpmatrix.m that produces the matrix in for given inputs and . Modify your script from to use and to plot for ; keep . It should produce a graph similar to that in for . Turn in the programs and the plot.  "
},
{
  "id": "exercises-implicit-methods-2",
  "level": "2",
  "url": "sec-implicit-methods.html#exercises-implicit-methods-2",
  "type": "Exercise",
  "number": "4.8.3.2",
  "title": "",
  "body": " Modify the program myheat ( ) into a new program myimplicitheat that uses the implicit method to solve the boundary value problem by repeatedly solving the system for each time step.  (Hints: Delete g1 and g2 from the program since they are always zero. Call using myimpmatrix before the loop and solve inside the loop.)  Run the program with , , and and at least 10 pairs of values of and . Turn in the program and a list of the you tried and whether the simulation was stable or unstable. Are you convinced that it is always stable?  "
},
{
  "id": "sec-insulated-BC",
  "level": "1",
  "url": "sec-insulated-BC.html",
  "type": "Section",
  "number": "4.9",
  "title": "Insulated Boundary Conditions",
  "body": " Insulated Boundary Conditions   Insulation  In many of the previous sections we have considered fixed boundary conditions, i.e. , . We implemented these simply by assigning and for all .  We also considered variable boundary conditions, such as . For example, we might have which could represent periodic heating and cooling of the end at .  A third important type of boundary condition is called the insulated boundary condition . It is so named because it mimics an insulator at the boundary. Physically, the effect of insulation is that no heat flows across the boundary. This means that the temperature gradient is zero, which implies that we should require the mathematical boundary condition .  To use it in a program, we must replace by a discrete version. Recall that in our discrete equations we usually have . Recall from the section on numerical derivatives, that there are three different ways to replace a derivative by a difference equation, left, right and central differences. The three of them at would be . If is the last node of our grid, then it is clear that we cannot use the right or central difference, but are stuck with the first of these. Setting that expression to zero implies . This restriction can be easily implemented in a program simply by putting a statement u(n+1)=u(n) inside the loop that updates values of the profile. However, since this method replaces by an expression that is only accurate to first order, it is not very accurate and is usually avoided.  Instead we want to use the most accurate version, the central difference. For that we should have , or simply . However, would represent and would be , which is outside the domain. This, however, is not an obstacle in a program. We can simply extend the grid to one more node, , and let always equal by copying into whenever changes. The point is fictional , but a computer does not know the difference between fiction and reality! This idea is carried out in the calculations of the next section and illustrated in .    Schematic of enforcing an insulated boundary condition.   Illustation of an insulated boundary condition using a fictional point with .   A way to think of an insulated boundary that makes sense of the point is to think of two bars joined end to end, where you let the second bar be mirror image of the first bar. If you do this, then no heat will flow across the joint, which is exactly the same effect as insulating.  Another practical way to implement an insulated boundary is to let the grid points straddle the boundary. For example suppose we want to impose insulated boundary at the left end of a bar, i.e. , then you could let the first two grid points be at and . Then you can let . This will again force the central difference at to be .    Implementation in a linear equation by elimination  Consider the BVP . This represents the steady state temperature of a bar with a uniformly applied heat source, with one end held at a fixed temperature and the other end insulated.  If we use 4 equally spaced intervals, then and . The point is outside the region and thus fictional. The boundary condition at is implemented as . For the insulated condition, we will require . This makes the central difference for be zero. We can write the differential equation as a difference equation or . For , recalling that , we have . For and we have . For we have . Note that we now have 5 unknowns in our problem: . However, from the boundary condition and so we can eliminate from our equation and write . Summarizing, we can put the unknown quantities in a vector and write the equations as a matrix equation where and . Solve this system and plot the results:  u = A \\ b  u = [5 ; u]  x = 0:.25:1  plot(x,u,'d')  Then interpolate with a spline.  The exact solution of this BVP is: . Use hold on and plot this function on the same graph to compare:  xx = 0:.01:1;  uu = 5 + xx - .5*xx.^2;  hold on  plot(xx,uu,'r')  You should see that our approximate solution is almost perfect!    Insulated boundary conditions in time-dependent problems  To implement the insulated boundary condition in an explicit difference equation with time, we need to copy values from inside the region to fictional points just outside the region. Note that you copy the new value from inside the region to the false point during each time step, i.e. inside the loop, but after the values are updated at the real points. See for an illustration.    Schematic of enforcing a time-dependent insulated boundary condition.   Illustration of information flow for the explicit method near the right boundary at . The top figure shows a fixed boundary condition, where is set to be . The bottom figure shows an insulating boundary condition. Now is updated in the same way as the general and an additional entry is used with its value set by copying .     An example  The steady state temperature (given in polar coordinates) of a disk subjected to a radially symmetric heat load and cooled by conduction to the rim of the disk and radiation to its environment is determined by the boundary value problem . Here is the (fixed) background temperature and is the (fixed) temperature at the rim of the disk.  The program myheatdisk.m ( ) implements these equations for parameter values , , and . Notice that the equations have a singularity (discontinuity) at . How does the program avoid this problem? How does the program implement and ? Run the program.     Redo the calculations for the BVP except do not include the fictional point . Instead, let be the last point and impose the insulated boundary by requiring . (Keep and . Your system of equations should be .) Compare this solution with the true solution and the better approximation in the section. Illustrate this comparison on a single plot.    Modify the program myheat.m ( ) to have an insulated boundary at (rather than ). You will need to change the domain to: x = 0:h:L+h , change the dimensions of all the other objects to fit this domain and implement the insulation (copy) step inside the loop (see and ).  Run the program with , , , and . Set and experiment with . Get a plot when the program is stable. Turn in your program and plot.    "
},
{
  "id": "fig-insulated",
  "level": "2",
  "url": "sec-insulated-BC.html#fig-insulated",
  "type": "Figure",
  "number": "4.9.1",
  "title": "",
  "body": "  Schematic of enforcing an insulated boundary condition.   Illustation of an insulated boundary condition using a fictional point with .  "
},
{
  "id": "fig-expheatinsulation",
  "level": "2",
  "url": "sec-insulated-BC.html#fig-expheatinsulation",
  "type": "Figure",
  "number": "4.9.2",
  "title": "",
  "body": "  Schematic of enforcing a time-dependent insulated boundary condition.   Illustration of information flow for the explicit method near the right boundary at . The top figure shows a fixed boundary condition, where is set to be . The bottom figure shows an insulating boundary condition. Now is updated in the same way as the general and an additional entry is used with its value set by copying .  "
},
{
  "id": "exercises-insulated-BC-1",
  "level": "2",
  "url": "sec-insulated-BC.html#exercises-insulated-BC-1",
  "type": "Exercise",
  "number": "4.9.5.1",
  "title": "",
  "body": " Redo the calculations for the BVP except do not include the fictional point . Instead, let be the last point and impose the insulated boundary by requiring . (Keep and . Your system of equations should be .) Compare this solution with the true solution and the better approximation in the section. Illustrate this comparison on a single plot.  "
},
{
  "id": "exercises-insulated-BC-2",
  "level": "2",
  "url": "sec-insulated-BC.html#exercises-insulated-BC-2",
  "type": "Exercise",
  "number": "4.9.5.2",
  "title": "",
  "body": " Modify the program myheat.m ( ) to have an insulated boundary at (rather than ). You will need to change the domain to: x = 0:h:L+h , change the dimensions of all the other objects to fit this domain and implement the insulation (copy) step inside the loop (see and ).  Run the program with , , , and . Set and experiment with . Get a plot when the program is stable. Turn in your program and plot.  "
},
{
  "id": "sec-FD-elliptic",
  "level": "1",
  "url": "sec-FD-elliptic.html",
  "type": "Section",
  "number": "4.10",
  "title": "Finite Difference Method for Elliptic PDEs",
  "body": " Finite Difference Method for Elliptic PDEs   Examples of Elliptic PDEs   Elliptic PDE's are equations with second derivatives in space and no time derivative. The most important examples are Laplace's equation and the Poisson equation . These equations are used in a large variety of steady-state physical situations such as: steady state heat problems, steady state chemical distributions, electrostatic potentials, elastic deformation and steady state fluid flows.  For the sake of clarity we will only consider the two dimensional problem. A good model problem in this dimension is the elastic deflection of a membrane. Suppose that a membrane such as a sheet of rubber is stretched across a rectangular frame. If some of the edges of the frame are bent, or if forces are applied to the sheet then it will deflect by an amount at each point . This will satisfy the boundary value problem: , where is the rectangle, is the edge of the rectangle, is the force density (pressure) applied at each point and is the deflection at the edge.    The Finite Difference Equations  Suppose the rectangle is described by . We will divide in sub-rectangles. If we have subdivisions in the direction and subdivisions in the direction, then the step size in the and directions respectively are . We obtain the finite difference equations for by replacing and by their central differences to obtain for and . See for an illustration. The boundary conditions are introduced by .    Schematic of elliptic finite difference.   The finite difference equation relates five neighboring values in a pattern.     Direct Solution of the Equations  Notice that since the edge values are prescribed, there are grid points where we need to determine the solution. Note also that there are exactly equations in . Finally, notice that the equations are all linear. Thus we could solve the equations exactly using matrix methods. To do this we would first need to express the 's as a vector, rather then a matrix. To do this there is a standard procedure: let be the column vector we get by placing one column after another from the columns of . Thus we would list first then , etc.. Next we would need to write the matrix that contains the coefficients of the equations and incorporate the boundary conditions in a vector . Then we could solve an equation of the form . Setting up and solving this equation is called the direct method.  An advantage of the direct method is that solving can be done relatively quickly and accurately. The drawback of the direct method is that one must set up , and , which is confusing. Further, the matrix has dimensions , which can be rather large. Although is large, many of its elements are zero. Such a matrix is called sparse and there are special methods intended for efficiently working with sparse matrices.    Iterative Solution  A usually preferred alternative to the direct method described above is to solve the finite difference equations iteratively. To do this, first solve for , which yields . This method is another example of a relaxation method. Using this formula, along with , we can update from its neighbors, just as we did in the relaxation method for the nonlinear boundary value problem. If this method converges, then the result is an approximate solution.  Download and read the script mypoisson.m ( ), which implements the iterative solution. You will notice that maxit is set to . Thus the program will not do any iteration, but will plot the initial guess. The initial guess in this case consists of the proper boundary values at the edges, and zero everywhere in the interior. To see the solution evolve, gradually increase maxit .     Modify the script mypoisson.m ( ) to change the force to a negative constant .  Obtain plots for and . You will need to adjust maxit to obtain convergence. Tell how many iterations are needed for convergence in each. Turn in your plots and the modified program.    Further modify mypoisson.m ( ) to change the edge of the rectangle at to be an insulated boundary, i.e. .  You will need to expand both the grid and the matrix u to include a row of fictional points. Then you will need to adjust a lot of indices and enforce insulation inside the loop. Run it with . If it is working correctly, the plot will be smooth and the derivative on the edge will appear to be zero. Turn in your plots and the modified program.    "
},
{
  "id": "fig-elliptic",
  "level": "2",
  "url": "sec-FD-elliptic.html#fig-elliptic",
  "type": "Figure",
  "number": "4.10.1",
  "title": "",
  "body": "  Schematic of elliptic finite difference.   The finite difference equation relates five neighboring values in a pattern.  "
},
{
  "id": "exercises-FD-elliptic-1",
  "level": "2",
  "url": "sec-FD-elliptic.html#exercises-FD-elliptic-1",
  "type": "Exercise",
  "number": "4.10.5.1",
  "title": "",
  "body": " Modify the script mypoisson.m ( ) to change the force to a negative constant .  Obtain plots for and . You will need to adjust maxit to obtain convergence. Tell how many iterations are needed for convergence in each. Turn in your plots and the modified program.  "
},
{
  "id": "exercises-FD-elliptic-2",
  "level": "2",
  "url": "sec-FD-elliptic.html#exercises-FD-elliptic-2",
  "type": "Exercise",
  "number": "4.10.5.2",
  "title": "",
  "body": " Further modify mypoisson.m ( ) to change the edge of the rectangle at to be an insulated boundary, i.e. .  You will need to expand both the grid and the matrix u to include a row of fictional points. Then you will need to adjust a lot of indices and enforce insulation inside the loop. Run it with . If it is working correctly, the plot will be smooth and the derivative on the edge will appear to be zero. Turn in your plots and the modified program.  "
},
{
  "id": "sec-finiteelements",
  "level": "1",
  "url": "sec-finiteelements.html",
  "type": "Section",
  "number": "4.11",
  "title": "Finite Elements",
  "body": " Finite Elements   Triangulating a Region  A disadvantage of finite difference methods is that they require a very regular grid, and thus a very regular region, either rectangular or a regular part of a rectangle. Finite elements is a method that works for any shape region because it is not built on a grid, but on triangulation of the region, i.e. cutting the region up into triangles as we did in a previous section. The following figure shows a triangularization of a region.    Plot of a washer made of triangles.   An annular region with a triangulation. Notice that the nodes and triangles are very evenly spaced.   This figure was produced by the script program mywasher.m ( ). Notice that the nodes are evenly distributed. This is good for the finite element process where we will use it.  Open the program mywasher.m ( ). This program defines a triangulation by defining the vertices in a matrix V in which each row contains the and coordinates of a vertex. Notice that we list the interior nodes first, then the boundary nodes.  Triangles are defined in the matrix T . Each row of T has three integer numbers indicating the indices of the nodes that form a triangle. For instance the first row is 43 42 25 , so is the triangle with vertices , and . The matrix in this case was produced by the MATLAB command delaunay . The command produced more triangles than desired and the unwanted ones were deleted.  A three dimensional plot of the region and triangles is produced by having the last line be trimesh(T,x,y,z) .    What is a finite element?  The finite element method is a mathematically complicated process. However, a finite element is actually a very simple object. To each node we associate a function that has the properties and for . Between nodes, is a linear function. This function is the finite element. (There are fancier types of finite elements that we will not discuss.)  If we consider one dimension, then a triangulation is just a subdivision into subintervals. In we show an uneven subdivision of an interval and the finite elements corresponding to each node.    Schematic of 1D finite elements.   The finite elements for the triangulation of a one dimensional object.   In two dimensions, is composed of triangular piece of planes. Thus is a function whose graph is a pyramid with its peak over node . For an example, try:  mywasher  z = 0*z;  z(1) =1  trimesh(T,x,y,z)      What is a finite element solution?  A finite element (approximate) solution is a linear combination of the elements: . Thus finding a finite element solution amounts to finding the best values for the constants .  In the program mywasher.m ( ), the vector z contains the node values . These values give the height at each node in the graph. For instance if we set all equal to except one equal to , then the function is a finite element. Do this for one boundary node, then for one interior node.  Notice that a sum of linear functions is a linear function. Thus the solution using linear elements is a piecewise linear function. Also notice that if we denote the -th vertex by , then . Thus we see that the constants are just the values at the nodes.   Take the one-dimensional case. Since we know that the solution is linear on each subinterval, knowing the values at the endpoints of the subintervals, i.e. the nodes, gives us complete knowledge of the solution. could be a finite element solution since it is piecewise linear.    Schematic of 1D finite element solution.   A possible finite element solution for a one dimensional object. Values are assigned at each node and a linear interpolant is used in between.   In the two-dimensional case, the solution is linear on each triangle, and so again, if we know the values at the nodes then we know everything.    Experiment with finite elements  By changing the values in z in the program we can produce different three dimensional shapes based on the triangles. The point then of a finite element solution is to find the values at the nodes that best approximate the true solution. This task can be subdivided into two parts: (1) assigning the values at the boundary nodes and (2) assigning the values at the interior nodes.    Values at boundary nodes  Once a triangulation and a set of finite elements is set up, the next step is to incorporate the boundary conditions of the problem. Suppose that we have fixed boundary conditions, i.e. of the form , where is the object (domain) and is its boundary. Then the boundary condition directly determines the values on the boundary nodes.  In particular, suppose that is a boundary node. Since and all the other elements are zero at node , then to make , we must choose . Thus the constants for the boundary nodes are set at exactly the value of the boundary condition at the nodes.   Thus, if there are interior nodes, then .  In the program mywasher.m ( ), the first 32 vertices correspond to interior nodes and the last 32 correspond to boundary nodes. By setting the last 32 values of z , we achieve the boundary conditions. We could do this by adding the following commands to the program: z(33:64) = .5; or more elaborately we might use functions:  z(33:48) = x(33:48).^2 - .5*y(33:48).^2; z(49:64) = .2*cos(y(49:64));       Generate an interesting or useful 2-d object and a well-distributed triangulation of it. Make it have at least 2 interior nodes and have it list the interior nodes before the boundary nodes.   Plot the region.    Plot one interior finite element.    Plot one boundary finite element.    Assign values to the boundary using a function (or functions) and plot the region with the boundary values.   Turn in your code and the four plots.    "
},
{
  "id": "fig-whasher",
  "level": "2",
  "url": "sec-finiteelements.html#fig-whasher",
  "type": "Figure",
  "number": "4.11.1",
  "title": "",
  "body": "  Plot of a washer made of triangles.   An annular region with a triangulation. Notice that the nodes and triangles are very evenly spaced.  "
},
{
  "id": "fig-1dfe",
  "level": "2",
  "url": "sec-finiteelements.html#fig-1dfe",
  "type": "Figure",
  "number": "4.11.2",
  "title": "",
  "body": "  Schematic of 1D finite elements.   The finite elements for the triangulation of a one dimensional object.  "
},
{
  "id": "fig-1dfesol",
  "level": "2",
  "url": "sec-finiteelements.html#fig-1dfesol",
  "type": "Figure",
  "number": "4.11.3",
  "title": "",
  "body": "  Schematic of 1D finite element solution.   A possible finite element solution for a one dimensional object. Values are assigned at each node and a linear interpolant is used in between.  "
},
{
  "id": "exr-ownFEregion",
  "level": "2",
  "url": "sec-finiteelements.html#exr-ownFEregion",
  "type": "Exercise",
  "number": "4.11.6.1",
  "title": "",
  "body": " Generate an interesting or useful 2-d object and a well-distributed triangulation of it. Make it have at least 2 interior nodes and have it list the interior nodes before the boundary nodes.   Plot the region.    Plot one interior finite element.    Plot one boundary finite element.    Assign values to the boundary using a function (or functions) and plot the region with the boundary values.   Turn in your code and the four plots.  "
},
{
  "id": "sec-determining-internal",
  "level": "1",
  "url": "sec-determining-internal.html",
  "type": "Section",
  "number": "4.12",
  "title": "Determining Internal Node Values",
  "body": " Determining Internal Node Values   As seen in the previous section, a finite element solution of a boundary value problem boils down to finding the best values of the constants , which are the values of the solution at the nodes. The interior nodes values are determined by variational principles. Variational principles usually amount to minimizing internal energy . It is a physical principle that systems seek to be in a state of minimal energy and this principle is used to find the internal node values.    Variational Principles  For the differential equations that describe many physical systems, the internal energy of the system is an integral. For instance, for the steady state heat equation the internal energy is the integral , where is the region on which we are working. It can be shown that is a solution of if and only if it is minimizer of in .    The finite element solution  Recall that a finite element solution is a linear combination of finite element functions: , where is the number of nodes. To obtain the values at the internal nodes, we will plug into the energy integral and minimize. That is, we find the minimum of for all choices of , where is the number of internal nodes. In this as with any other minimization problem, the way to find a possible minimum is to differentiate the quantity with respect to the variables and set the results to zero. In this case the free variables are . Thus to find the minimizer we should try to solve . We call this set of equations the internal node equations . At this point we should ask whether the internal node equations can be solved, and if so, is the solution actually a minimizer (and not a maximizer). The following two facts answer these questions. These facts make the finite element method practical:   For most applications the internal node equations are linear.    For most applications the internal node equations give a minimizer.   We can demonstrate the first fact using an example.    Application to the steady state heat equation  If we plug the candidate finite element solution into the energy integral for the heat equation , we obtain . Differentiating with respect to we obtain the internal node equations . Now we have several simplifications. First note that since , we have . Also note that , and so . Similarly, . The integral then becomes .  Next we use the fact that the region is subdivided into triangles and the functions in question have different definitions on each triangle. The integral then is a sum of the integrals: . Now note that the function is linear on triangle and so . This gives us the simplifications . Also, and restricted to have the form . The internal node equations then reduce to . Now notice that is just a constant on , and, thus, we have , where is just the area of . Finally, we apply the Three Corners rule to make an approximation to the integral . Since if and even if does not have a corner at , we get the approximation . If does have a corner at then .  Summarizing, the internal node equations are . While not pretty, these equations are in fact linear in the unknowns .    Experiment  Download the program myfiniteelem.m ( ). This program produces a finite element solution for the steady state heat equation without source term: . To use it, you first need to set up the region and boundary values by running a script such as mywasher.m ( ) or mywedge.m ( ). Try different settings for the boundary values z . You will see that the program works no matter what you choose.    For this exercise, use the region that you made in .   Set non-constant boundary values and plot.    Then run myfiniteelem.m ( ) and plot.   Does the second plot look like it satisfies a variational principle? Why or why not? Turn in the two plots and your answers to the questions.   "
},
{
  "id": "sec-chapter4-review",
  "level": "1",
  "url": "sec-chapter4-review.html",
  "type": "Section",
  "number": "4.13",
  "title": "Review of Chapter 4",
  "body": " Review of Chapter 4   Initial Value Problems   Reduction to First order system:  For an -th order equation that can be solved for the -th derivative use the standard change of variables: . Differentiating results in a first-order system: .    Euler's method:       Modified (or Improved) Euler method:        Boundary Value Probems   Finite Differences:  Replace the Differential Equation by Difference Equations on a grid. Review the section on Numerical Differentiation.    Explicit Method Finite Differences for Parabolic PDE (heat):   leads to , where , , and . The stability condition is .    Implicit Method Finite Differences for Parabolic PDE (heat):   leads to , which is always stable and has truncation error .    Crank-Nicholson Method Finite Differences for Parabolic PDE (heat):   , which is always stable and has truncation error .    Finite Difference Method for Elliptic PDEs:       Finite Elements:  Based on triangles instead of rectangles. Can be used for irregularly shaped objects. An element: Pyramid shaped function at a node. A finite element solution is a linear combination of finite element functions: , where is the number of nodes, and where is an approximation of the true solution. is the value of the solution at node . at the boundary nodes are given by boundary conditions. at interior nodes are determined by variation principles. The last step in determining 's is solving a linear system of equations.     MATLAB  Initial value problem solver that uses the Runge-Kutta 45 method, which has error . The input is the initial vector and tspan is the time span. You can either make a vector valued anonymous function and do  df = @(t,y)[-y(2);y(1)]  [T Y ] = ode45(dy,tspan,y0)  or make a function program that outputs a vector  function dy = myf(t,y) dy = [-y(2);y(1)]; end  and then do [T Y ] = ode45(@myf,tspan,y0)   The program ode45 and other MATLAB IVP solvers use adaptive step size to achieve a desired local and global accuracy, with a default of tol  for the global error.  The chief benefit of higher order methods and variable step size is that they allow a program to take only as few steps as necessary.   "
},
{
  "id": "sec-appendix-matlab",
  "level": "1",
  "url": "sec-appendix-matlab.html",
  "type": "Section",
  "number": "A.1",
  "title": "Glossary of Select MATLAB Commands",
  "body": " Glossary of Select MATLAB Commands   Mathematical Operations   + Addition. Type help plus for information.  - Subtraction. Type help minus for information.  * Scalar or matrix multiplication. Type help mtimes for information.  \/ Scalar or right matrix division. Type help slash for information. For matrices, the command A\/B is equivalent to A*inv(B) .  ^ Scalar or matrix powers. Type help mpower for information.  .* Element by element multiplication. Type help times for information.  .^ Element by element exponentiation. Type help power for information.  .\/ Element by element division.     Built-in Mathematical Constants   eps Machine epsilon, i.e. approximately the computer's floating point roundoff error.  i  .  Inf  .  NaN Not a number. Indicates an invalid operation such as .  pi  .     Built-in Mathematical Functions   abs(x) Absolute value .  acos(x) Inverse cosine .  asin(x) Inverse sine .  atan(x) Inverse tangent .  cos(x) Cosine .  cosh(x) Hyperbolic cosine .  cot(x) Cotangent .  exp(x) Exponential function .  log(x) Natural logarithm .  sec(x) Secant .  sin(x) Sine .  sinh(x) Hyperbolic sine .  sqrt(x) Square root .  tan(x) Tangent .  tanh(x) Hyperbolic tangent .  max Computes maximum of the rows of a matrix.  mean Computes the average of the rows of a matrix.  min Computes the minimum of the rows of a matrix.     Built-in Numerical Mathematical Operations   fzero Tries to find a zero of the specified function near a starting point or on a specified interval.  inline Define a function in the command window.  ode113 Numerical multiple step ODE solver.  ode45 Runga-Kutta 45 numerical ODE solver.  quad Numerical integration using an adaptive Simpson's rule.  dblquad Double integration.  triplequad Triple integration.     Built-in Symbolic Mathematical Operations   collect Collects powers of the specified variable is a given symbolic expression.  compose Composition of symbolic functions.  diff Symbolic differentiation.  double Displays double-precision representation of a symbolic expression.  dsolve Symbolic ODE solver.  expand Expands an algebraic expression.  factor Factor a polynomial.  int Symbolic integration; either definite or indefinite.  limit Finds two-sided limit, if it exists.  pretty Displays a symbolic expression in a nice format.  simple Simplifies a symbolic expression.  subs Substitutes for parts a a symbolic expression.  sym or syms Create symbolic variables.  symsum Performs a symbolic summation, possibly with infinitely many entries.  taylor Gives a Taylor polynomial approximation of a given order at a specified point.     Graphics Commands   contour Plots level curves of a function of two variables.  contourf Filled contour plot.  ezcontour Easy contour plot.  loglog Creates a log-log plot.  mesh Draws a mesh surface.  meshgrid Creates arrays that can be used as inputs in graphics commands such as contour , mesh , quiver , and surf .  ezmesh Easy mesh surface plot.  plot Plots data vectors.  ezplot Easy plot for symbolic functions.  plot3 Plots curves in 3-D.  polar Plots in polar coordinates.  quiver Plots a vector field.  semilogy Semilog plot, with logarithmic scale along the vertical direction.  surf Solid surface plot.  trimesh Plot based on a triangulation  trisurf Surface plot based on a triangulation     Special MATLAB Commands   : Range operator, used for defining vectors and in loops. Type help colon for information.  ; Suppresses output. Also separates rows of a matrix.  = Assigns the variable on the left hand side the value of the right hand side.  ans The value of the most recent unassigned.  cd Change directory.  clear Clears all values and definitions of variables and functions. You may also use to clear only specified variables.  diary Writes a transcript of a MATLAB session to a file.  dir Lists the contents in the current working directory. Same as ls .  help  inline Define an inline function.  format Specifies output format, e.g. format long .  load Load variables from a file.  save Saves workspace variables to a file.     MATLAB Programming   == Is equal?  ~= Is not equal?  < Less than?  > Greater than?  <= Less than or equal?  break Breaks out of a for or while loop.  end Terminates an if , for or while statement.  else Alternative in an if statement.  error Displays and error message and ends execution of a program.  for Repeats a block of commands a specified number of times.  function First word in a function program.  if Checks a condition before executing a block of statements.  return Terminates execution of a program.  warning Displays a warning message.  while Repeats a block of commands as long as a condition is true.     Commands for Matrices and Linear Algebra  Matrix arithmetic:   A = [ 1 3 -2 5 ; -1 -1 5 4 ; 0 1 -9 0] Manually enter a matrix.  u = [ 1 2 3 4]'  A*u  B = [3 2 1; 7 6 5; 4 3 2]  B*A multiply times .  2*A multiply a matrix by a scalar.  A + A add matrices.  A + 3 add a number to every entry of a matrix.  B.*B component-wise multiplication.  B.^3 component-wise exponentiation.   Special matrices:   I = eye(3) identity matrix  D = ones(5,5)  O = zeros(10,10)  C = rand(5,5) random matrix with uniform distribution in .  C = randn(5,5) random matrix with normal distribution.  hilb(6)  pascal(5)   General matrix commands:   size(C) gives the dimensions ( ) of .  norm(C) gives the norm of the matrix.  det(C) the determinant of the matrix.  max(C) the maximum of each row.  min(C) the minimum in each row.  sum(C) sums each row.  mean(C) the average of each row.  diag(C) just the diagonal elements.  inv(C) inverse of the matrix.   Matrix decompositions:   [L U P] = lu(C)  [Q R] = qr(C)  [U S V] = svd(C) singular value decomposition.    "
},
{
  "id": "sec-programs-used",
  "level": "1",
  "url": "sec-programs-used.html",
  "type": "Section",
  "number": "A.2",
  "title": "Programs Used",
  "body": " Programs Used      List of Programs Used    Program Name View Code Download Link    mybisect  download mybisect.m    mydblsimpweights  download mydblsimpweights.m    myeuler  download myeuler.m    myexactbeam  download myexactbeam.m    myexpmatrix  download myexpmatrix.m    myfiniteelem  download myfiniteelem.m    myheat  download myheat.m    myheatdisk  download myheatdisk.m    mylowerleft  download mylowerleft.m    mymodeuler  download mymodeuler.m    mynewton  download mynewton.m    mynonlinheat  download mynonlinheat.m    mypoisson  download mypoisson.m    mysecant  download mysecant.m    mysimpweights  download mysimpweights.m    mythreecorners  download mythreecorners.m    mywasher  download mywasher.m    mywedge  download mywedge.m     Below are programs used in the main text, but not written out there.   myexactbeam   % Plot the deflection y of a beam of length L under tension T % and a uniform load w. Uses the exact analytic solution of the % boundary value problem. For T=0, the solution breaks down. % For T (e.g. T=.1) close to zero using the exact solution leads to loss % of precision. % Coefficients for a structural steel I-beam W12x22 in lb. in. E = 29000000 I = 121 L = 120 % Load and tension w = 10000 T = 10000 % calculated coefficients EI = E*I a = T\/EI b = w\/(2*EI) K = exp(sqrt(a)*L) d5 = 2*b\/(a^2) d2 = - d5*(1\/(1+K)) d1 = d2*K d3 = b\/a d4 = - d3*L % grid xx = linspace(0,L,101); % deflection yy = d1*exp(-sqrt(a)*xx) + d2*exp(sqrt(a)*xx) + d3*xx.^2 + d4*xx + d5; %plot the result plot(xx,yy,'r')     myfiniteelem   % Finite elements program % adapted from \"Applied Numerical Anaylsis\" by L. Faussett, Prentice Hall. % Solves u_xx + u_yy = 0 % with fixed boundary conditions % A list of vertices V and a list of triangles T must be in memory. % x and y must be row vectors containing coordinates of the vertices. % The following variable must also be in memory: % n is the number of vertices % m is the number of internal vertices % p is the number of triangles % z input values at the vertices, including boundary values. % Plot the boundary conditions and initial values of nodes figure trimesh(T,x,y,z) %Define basis function for each node for j = 1:n % for each node (finite element) for k = 1:p % for each triangle for i = 1:3 % for each vertex of the triangle aa(i,1) = 1; aa(i,2) = V(T(k,i),1); aa(i,3) = V(T(k,i),2); if T(k,i) == j % if the vertex goes with the element bb(i,1) = 1; % set the value to one. else bb(i,1) = 0; % otherwise set it to zero. end end abc = aa\\bb; % solve for coefficients of function j on T_k. A(j,k) = abc(1); B(j,k) = abc(2); C(j,k) = abc(3); end end % Calculate the areas of the triangles H = ones(1,p); for i = 1:p H(i) = .5*abs(det([x(T(i,1)), x(T(i,2)), x(T(i,3)); y(T(i,1)), y(T(i,2)), y(T(i,3)); 1, 1, 1])); end % This section solves for the values at the interior vertices for i = 1:m for j = 1:m s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p); AAA(i,j) = s*H'; end end for i = 1:m for j = m+1:n k = j - m; s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p); G(i,k) = s*H'; end end d(1:m) = -G*z(m+1:n)'; z(1:m) = AAA\\d'; % Plot the solution figure trimesh(T,x,y,z)     myheatdisk   %myheatdisk R=5; % radius of disk n=100; % number of subintervals h=R\/n; % step size hh=h^2; % h^2 is used in each loop steps=500; d = .1; % radiation coefficient ub=10; % temperature of surroundings uR=10; % temperature at the edge ub4=ub^4; % ub^4 is used in each loop r=-h\/2:h:R+h\/2; % grid points g=(r-5).^2; % equation of source of heat u=ones(1,n+2)*10; % sets initial temperatrue profile u(n+2) = uR; % sets temperature at edge plot(r,u) % plots initial temperature profile hold on; for j=1:steps for i=2:n+1 u(i)=-hh*d*(u(i)^4-ub4)\/3 + hh*g(i)\/3 + h*(u(i+1)-u(i-1))\/(6*r(i)) + (u(i-1)+u(i)+u(i+1))\/3; end u(1)=u(2); % makes u'(0) = 0 plot(r,u) % plots temperature profiles end hold off;     mylowerleft   function I = mylowerleft(f,a,b,c,d,m,n) % Computes an approximate integral of a function of two variables f(x,y). % Uses the lower-left corner to evaluate. % Inputs: % a,b -- define the interval in x, namely a<x<b. % c,d -- define the interval in y, namely c<y<d. % m -- the number of (evenly spaced) intervals to use in x. % n -- the number of (evenly spaced) intervals to use in y. % Output: The approximate value of the integral. % % Note: This program intentionally has a bug. Find and fix it. h = (b-a)\/m; % step size in x direction k = (d-c)\/n; % step size in y direction [X,Y] = meshgrid(a:h:b,c:k:d); % sets up a grid Z=f(X,Y); mesh(X,Y,Z) % plot, just for fun S = sum(sum(Z(1:m,1:n))); I = S*h*k; end     mymodeuler   function [T , Y] = mymodeuler(f,tspan,y0,n) % Solves dy\/dt = f(t,y) with initial condition y(a) = y0 % on the interval [a,b] using n steps of the modified Euler's method. % Inputs: f -- a function f(t,y) that returns a column vector of the same % length as y % tspan -- a vector [a,b] with the start and end times % y0 -- a column vector of the initial values, y(a) = y0 % n -- number of steps to use % Outputs: T -- a n+1 column vector containing the times % Y -- a (n+1) by d matrix where d is the length of y % Y(j,i) gives the ith component of y at time T(j) a = tspan(1); b = tspan(2); % parse starting and ending points h = (b-a)\/n; % step size t = a; T = a; % t is the current time and T will record all times y = y0; % y is the current variable values, as a column vector Y = y0'; % Y will record the values at all steps, each in a row for i = 1:n k1 = h*f(t,y); % y increment based on current time k2 = h*f(t+h,y+k1); % y increment based on next time y = y + .5*(k1+k2); % update y using the average t = a + i*h; % The next time. T = [T; t]; % Record t and y into T and Y. Y = [Y; y']; end end     mypoisson   % mypoisson % Poisson on a Rectangle % Solves u_xx + u_yy = f(x,y) % with boundary conditions: % u(a,y) = u(x,c) = 1 % u(b,y) = 1 + 5\/8 y % u(x,d) = 1 + 1\/2 x % with f(x,y) = .5 sin(x)sin(y) % Define the rectangle and nodes a = 0; b = 10; c = 0; d = 8; m = 15; n = 10; h = (b-a)\/m; k = (d-c)\/n; x = a:h:b; y = c:k:d; % Assign number of iterations and calculate constants maxit = 0; c1 = h^2\/(2*(h^2 + k^2)); c2 = k^2\/(2*(h^2 + k^2)); c3 = k^2*c1; % Assign initial values and boundary conditions u = zeros(m+1,n+1); u(1,:) = 1; u(:,1) = 1; u(:,n+1) = 1 + 5*sin(x(:)*pi\/b\/2); u(m+1,:) = 1 + (5\/8)*y(:); % Assign values of f(x,y) in the interior f = zeros(m+1,n+1); for i = 2:m f(i,:) = .5*sin(x(i)).*sin(y(:)); end % Iterate values of u in the interior for j = 1:maxit u(2:m,2:n) = c1*(u(2:m,3:n+1)+u(2:m,1:n-1)) + c2*(u(3:m+1,2:n)+u(1:m-1,2:n)) - c3*f(2:m,2:n); end % Plot the result mesh(x,y,u')     mywasher   % Program to produce the triangulation, % boundary condition and initial values % at the interior nodes for a Washer. clear all % V contains vertices V = [% interior points 1.4712 0.2926 1.2472 0.8334 0.8334 1.2472 0.2926 1.4712 -0.2926 1.4712 -0.8334 1.2472 -1.2472 0.8334 -1.4712 0.2926 -1.4712 -0.2926 -1.2472 -0.8334 -0.8334 -1.2472 -0.2926 -1.4712 0.2926 -1.4712 0.8334 -1.2472 2.0000 0 1.8478 0.7654 1.4142 1.4142 0.7654 1.8478 0.0000 2.0000 -0.7654 1.8478 -1.4142 1.4142 -1.8478 0.7654 -2.0000 0.0000 -1.8478 -0.7654 -1.4142 -1.4142 -0.7654 -1.8478 -0.0000 -2.0000 0.7654 -1.8478 1.4142 -1.4142 1.8478 -0.7654 1.2472 -0.8334 1.4712 -0.2926 % outerboundary 2.4520 0.4877 2.0787 1.3889 1.3889 2.0787 0.4877 2.4520 -0.4877 2.4520 -1.3889 2.0787 -2.0787 1.3889 -2.4520 0.4877 -2.4520 -0.4877 -2.0787 -1.3889 -1.3889 -2.0787 -0.4877 -2.4520 0.4877 -2.4520 1.3889 -2.0787 2.0787 -1.3889 2.4520 -0.4877 % inner boundary 1.0000 0 0.9239 0.3827 0.7071 0.7071 0.3827 0.9239 0.0000 1.0000 -0.3827 0.9239 -0.7071 0.7071 -0.9239 0.3827 -1.0000 0.0000 -0.9239 -0.3827 -0.7071 -0.7071 -0.3827 -0.9239 -0.0000 -1.0000 0.3827 -0.9239 0.7071 -0.7071 0.9239 -0.3827]; % T assigns the traingles T = [43 42 25 11 10 59 11 10 25 23 40 41 22 40 39 22 23 40 21 38 39 21 22 7 21 22 39 24 10 9 24 42 41 24 42 25 24 10 25 24 23 41 24 23 9 27 45 44 28 45 46 28 27 45 30 47 48 29 47 46 29 28 14 29 28 46 29 30 47 26 11 12 26 43 44 26 43 25 26 11 25 26 27 44 26 27 12 20 38 37 20 21 38 58 57 9 58 10 59 58 10 9 8 57 56 8 22 23 8 23 9 8 57 9 8 56 7 8 22 7 63 62 14 60 61 12 60 11 59 60 11 12 13 61 62 13 28 27 13 27 12 13 61 12 13 62 14 13 28 14 19 36 37 19 20 37 19 20 5 17 34 35 55 56 7 53 54 5 18 36 35 18 19 36 18 17 35 16 33 34 16 17 34 6 55 54 6 20 21 6 21 7 6 55 7 6 20 5 6 54 5 4 19 5 4 53 5 4 53 52 4 18 19 3 18 17 3 4 52 3 4 18 2 16 17 2 3 17 31 29 30 31 32 30 31 32 64 31 64 63 31 29 14 31 63 14 15 30 48 15 32 30 15 33 48 15 16 33 1 2 16 1 15 16 1 15 32 51 3 52 51 2 3 50 1 2 50 51 2 49 1 32 49 32 64 49 50 1]; % x, y are row vectors containing coordinates of vertices x = V(:,1)'; y = V(:,2)'; % n is the number of vertices n= size(V,1); % m is the number of interior vertices m = 32; % p is the number of triangles p= size(T,1); % Plot the mesh figure trimesh(T,x,y) % Set values at nodes % The first 32 entries are interior vertices, the final 32 are % boundary vertices. z = x+2.5; % Set node values to a linear funtion. z(49:64) = 0; % Set inner boundary nodes to zero. z(1:32) = 0; % Set interior nodes to zero. % Plot the mesh with node values specified. figure trimesh(T,x,y,z)     mywedge   % Construct a Wedge-shaped region and its triangulation clear all % Set up internal nodes (manually): V = [ .89*cos(pi\/8) .89*sin(pi\/8); 1.9*cos(pi\/8) 1.9*sin(pi\/8); 3*cos(pi\/12) 3*sin(pi\/12); 3*cos(pi\/6) 3*sin(pi\/6) ; 4*cos(pi\/16) 4*sin(pi\/16); 4*cos(pi\/8) 4*sin(pi\/8); 4*cos(3*pi\/16) 4*sin(3*pi\/16) 4.6*cos(.03*pi) 4.6*sin(.028*pi); 4.6*cos(.22*pi) 4.6*sin(.222*pi) ]; m= size(V,1); % m = number internal nodes % Set up boundary nodes (manually) and append: a = cos(pi\/4); V = [ V; 0 0 ; 1 0 ; 2 0 ; 3 0 ; 4 0 ; 5 0 ; a a ; 2*a 2*a; 3*a 3*a; 4*a 4*a; 5*a 5*a]; for i = 1:4 x = 5*cos(pi*i\/20); y = 5*sin(pi*i\/20); V = [ V; x y]; end n = size(V,1); % n = total number nodes % extract x and y coordinates of all nodes x = V(:,1)'; y = V(:,2)'; % make triangulation T = delaunay(x,y); p = size(T,1); % p = number of triangles % Plot the mesh figure trimesh(T,x,y) % Set node values to a function z = sin(x\/2)+(y\/3).^2; z(1:9) = 0; % Plot the mesh with node values specified. figure trimesh(T,x,y,z)     "
},
{
  "id": "sec-programs-used-2-2",
  "level": "2",
  "url": "sec-programs-used.html#sec-programs-used-2-2",
  "type": "Table",
  "number": "A.2.1",
  "title": "List of Programs Used",
  "body": " List of Programs Used    Program Name View Code Download Link    mybisect  download mybisect.m    mydblsimpweights  download mydblsimpweights.m    myeuler  download myeuler.m    myexactbeam  download myexactbeam.m    myexpmatrix  download myexpmatrix.m    myfiniteelem  download myfiniteelem.m    myheat  download myheat.m    myheatdisk  download myheatdisk.m    mylowerleft  download mylowerleft.m    mymodeuler  download mymodeuler.m    mynewton  download mynewton.m    mynonlinheat  download mynonlinheat.m    mypoisson  download mypoisson.m    mysecant  download mysecant.m    mysimpweights  download mysimpweights.m    mythreecorners  download mythreecorners.m    mywasher  download mywasher.m    mywedge  download mywedge.m    "
},
{
  "id": "prg-myexactbeam",
  "level": "2",
  "url": "sec-programs-used.html#prg-myexactbeam",
  "type": "Program",
  "number": "A.2.2",
  "title": "myexactbeam",
  "body": " myexactbeam   % Plot the deflection y of a beam of length L under tension T % and a uniform load w. Uses the exact analytic solution of the % boundary value problem. For T=0, the solution breaks down. % For T (e.g. T=.1) close to zero using the exact solution leads to loss % of precision. % Coefficients for a structural steel I-beam W12x22 in lb. in. E = 29000000 I = 121 L = 120 % Load and tension w = 10000 T = 10000 % calculated coefficients EI = E*I a = T\/EI b = w\/(2*EI) K = exp(sqrt(a)*L) d5 = 2*b\/(a^2) d2 = - d5*(1\/(1+K)) d1 = d2*K d3 = b\/a d4 = - d3*L % grid xx = linspace(0,L,101); % deflection yy = d1*exp(-sqrt(a)*xx) + d2*exp(sqrt(a)*xx) + d3*xx.^2 + d4*xx + d5; %plot the result plot(xx,yy,'r')   "
},
{
  "id": "prg-myfiniteelem",
  "level": "2",
  "url": "sec-programs-used.html#prg-myfiniteelem",
  "type": "Program",
  "number": "A.2.3",
  "title": "myfiniteelem",
  "body": " myfiniteelem   % Finite elements program % adapted from \"Applied Numerical Anaylsis\" by L. Faussett, Prentice Hall. % Solves u_xx + u_yy = 0 % with fixed boundary conditions % A list of vertices V and a list of triangles T must be in memory. % x and y must be row vectors containing coordinates of the vertices. % The following variable must also be in memory: % n is the number of vertices % m is the number of internal vertices % p is the number of triangles % z input values at the vertices, including boundary values. % Plot the boundary conditions and initial values of nodes figure trimesh(T,x,y,z) %Define basis function for each node for j = 1:n % for each node (finite element) for k = 1:p % for each triangle for i = 1:3 % for each vertex of the triangle aa(i,1) = 1; aa(i,2) = V(T(k,i),1); aa(i,3) = V(T(k,i),2); if T(k,i) == j % if the vertex goes with the element bb(i,1) = 1; % set the value to one. else bb(i,1) = 0; % otherwise set it to zero. end end abc = aa\\bb; % solve for coefficients of function j on T_k. A(j,k) = abc(1); B(j,k) = abc(2); C(j,k) = abc(3); end end % Calculate the areas of the triangles H = ones(1,p); for i = 1:p H(i) = .5*abs(det([x(T(i,1)), x(T(i,2)), x(T(i,3)); y(T(i,1)), y(T(i,2)), y(T(i,3)); 1, 1, 1])); end % This section solves for the values at the interior vertices for i = 1:m for j = 1:m s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p); AAA(i,j) = s*H'; end end for i = 1:m for j = m+1:n k = j - m; s(1:p) = B(i,1:p).*B(j,1:p) + C(i,1:p).*C(j,1:p); G(i,k) = s*H'; end end d(1:m) = -G*z(m+1:n)'; z(1:m) = AAA\\d'; % Plot the solution figure trimesh(T,x,y,z)   "
},
{
  "id": "prg-myheatdisk",
  "level": "2",
  "url": "sec-programs-used.html#prg-myheatdisk",
  "type": "Program",
  "number": "A.2.4",
  "title": "myheatdisk",
  "body": " myheatdisk   %myheatdisk R=5; % radius of disk n=100; % number of subintervals h=R\/n; % step size hh=h^2; % h^2 is used in each loop steps=500; d = .1; % radiation coefficient ub=10; % temperature of surroundings uR=10; % temperature at the edge ub4=ub^4; % ub^4 is used in each loop r=-h\/2:h:R+h\/2; % grid points g=(r-5).^2; % equation of source of heat u=ones(1,n+2)*10; % sets initial temperatrue profile u(n+2) = uR; % sets temperature at edge plot(r,u) % plots initial temperature profile hold on; for j=1:steps for i=2:n+1 u(i)=-hh*d*(u(i)^4-ub4)\/3 + hh*g(i)\/3 + h*(u(i+1)-u(i-1))\/(6*r(i)) + (u(i-1)+u(i)+u(i+1))\/3; end u(1)=u(2); % makes u'(0) = 0 plot(r,u) % plots temperature profiles end hold off;   "
},
{
  "id": "prg-mylowerleft",
  "level": "2",
  "url": "sec-programs-used.html#prg-mylowerleft",
  "type": "Program",
  "number": "A.2.5",
  "title": "mylowerleft",
  "body": " mylowerleft   function I = mylowerleft(f,a,b,c,d,m,n) % Computes an approximate integral of a function of two variables f(x,y). % Uses the lower-left corner to evaluate. % Inputs: % a,b -- define the interval in x, namely a<x<b. % c,d -- define the interval in y, namely c<y<d. % m -- the number of (evenly spaced) intervals to use in x. % n -- the number of (evenly spaced) intervals to use in y. % Output: The approximate value of the integral. % % Note: This program intentionally has a bug. Find and fix it. h = (b-a)\/m; % step size in x direction k = (d-c)\/n; % step size in y direction [X,Y] = meshgrid(a:h:b,c:k:d); % sets up a grid Z=f(X,Y); mesh(X,Y,Z) % plot, just for fun S = sum(sum(Z(1:m,1:n))); I = S*h*k; end   "
},
{
  "id": "prg-mymodeuler",
  "level": "2",
  "url": "sec-programs-used.html#prg-mymodeuler",
  "type": "Program",
  "number": "A.2.6",
  "title": "mymodeuler",
  "body": " mymodeuler   function [T , Y] = mymodeuler(f,tspan,y0,n) % Solves dy\/dt = f(t,y) with initial condition y(a) = y0 % on the interval [a,b] using n steps of the modified Euler's method. % Inputs: f -- a function f(t,y) that returns a column vector of the same % length as y % tspan -- a vector [a,b] with the start and end times % y0 -- a column vector of the initial values, y(a) = y0 % n -- number of steps to use % Outputs: T -- a n+1 column vector containing the times % Y -- a (n+1) by d matrix where d is the length of y % Y(j,i) gives the ith component of y at time T(j) a = tspan(1); b = tspan(2); % parse starting and ending points h = (b-a)\/n; % step size t = a; T = a; % t is the current time and T will record all times y = y0; % y is the current variable values, as a column vector Y = y0'; % Y will record the values at all steps, each in a row for i = 1:n k1 = h*f(t,y); % y increment based on current time k2 = h*f(t+h,y+k1); % y increment based on next time y = y + .5*(k1+k2); % update y using the average t = a + i*h; % The next time. T = [T; t]; % Record t and y into T and Y. Y = [Y; y']; end end   "
},
{
  "id": "prg-mypoisson",
  "level": "2",
  "url": "sec-programs-used.html#prg-mypoisson",
  "type": "Program",
  "number": "A.2.7",
  "title": "mypoisson",
  "body": " mypoisson   % mypoisson % Poisson on a Rectangle % Solves u_xx + u_yy = f(x,y) % with boundary conditions: % u(a,y) = u(x,c) = 1 % u(b,y) = 1 + 5\/8 y % u(x,d) = 1 + 1\/2 x % with f(x,y) = .5 sin(x)sin(y) % Define the rectangle and nodes a = 0; b = 10; c = 0; d = 8; m = 15; n = 10; h = (b-a)\/m; k = (d-c)\/n; x = a:h:b; y = c:k:d; % Assign number of iterations and calculate constants maxit = 0; c1 = h^2\/(2*(h^2 + k^2)); c2 = k^2\/(2*(h^2 + k^2)); c3 = k^2*c1; % Assign initial values and boundary conditions u = zeros(m+1,n+1); u(1,:) = 1; u(:,1) = 1; u(:,n+1) = 1 + 5*sin(x(:)*pi\/b\/2); u(m+1,:) = 1 + (5\/8)*y(:); % Assign values of f(x,y) in the interior f = zeros(m+1,n+1); for i = 2:m f(i,:) = .5*sin(x(i)).*sin(y(:)); end % Iterate values of u in the interior for j = 1:maxit u(2:m,2:n) = c1*(u(2:m,3:n+1)+u(2:m,1:n-1)) + c2*(u(3:m+1,2:n)+u(1:m-1,2:n)) - c3*f(2:m,2:n); end % Plot the result mesh(x,y,u')   "
},
{
  "id": "prg-mywasher",
  "level": "2",
  "url": "sec-programs-used.html#prg-mywasher",
  "type": "Program",
  "number": "A.2.8",
  "title": "mywasher",
  "body": " mywasher   % Program to produce the triangulation, % boundary condition and initial values % at the interior nodes for a Washer. clear all % V contains vertices V = [% interior points 1.4712 0.2926 1.2472 0.8334 0.8334 1.2472 0.2926 1.4712 -0.2926 1.4712 -0.8334 1.2472 -1.2472 0.8334 -1.4712 0.2926 -1.4712 -0.2926 -1.2472 -0.8334 -0.8334 -1.2472 -0.2926 -1.4712 0.2926 -1.4712 0.8334 -1.2472 2.0000 0 1.8478 0.7654 1.4142 1.4142 0.7654 1.8478 0.0000 2.0000 -0.7654 1.8478 -1.4142 1.4142 -1.8478 0.7654 -2.0000 0.0000 -1.8478 -0.7654 -1.4142 -1.4142 -0.7654 -1.8478 -0.0000 -2.0000 0.7654 -1.8478 1.4142 -1.4142 1.8478 -0.7654 1.2472 -0.8334 1.4712 -0.2926 % outerboundary 2.4520 0.4877 2.0787 1.3889 1.3889 2.0787 0.4877 2.4520 -0.4877 2.4520 -1.3889 2.0787 -2.0787 1.3889 -2.4520 0.4877 -2.4520 -0.4877 -2.0787 -1.3889 -1.3889 -2.0787 -0.4877 -2.4520 0.4877 -2.4520 1.3889 -2.0787 2.0787 -1.3889 2.4520 -0.4877 % inner boundary 1.0000 0 0.9239 0.3827 0.7071 0.7071 0.3827 0.9239 0.0000 1.0000 -0.3827 0.9239 -0.7071 0.7071 -0.9239 0.3827 -1.0000 0.0000 -0.9239 -0.3827 -0.7071 -0.7071 -0.3827 -0.9239 -0.0000 -1.0000 0.3827 -0.9239 0.7071 -0.7071 0.9239 -0.3827]; % T assigns the traingles T = [43 42 25 11 10 59 11 10 25 23 40 41 22 40 39 22 23 40 21 38 39 21 22 7 21 22 39 24 10 9 24 42 41 24 42 25 24 10 25 24 23 41 24 23 9 27 45 44 28 45 46 28 27 45 30 47 48 29 47 46 29 28 14 29 28 46 29 30 47 26 11 12 26 43 44 26 43 25 26 11 25 26 27 44 26 27 12 20 38 37 20 21 38 58 57 9 58 10 59 58 10 9 8 57 56 8 22 23 8 23 9 8 57 9 8 56 7 8 22 7 63 62 14 60 61 12 60 11 59 60 11 12 13 61 62 13 28 27 13 27 12 13 61 12 13 62 14 13 28 14 19 36 37 19 20 37 19 20 5 17 34 35 55 56 7 53 54 5 18 36 35 18 19 36 18 17 35 16 33 34 16 17 34 6 55 54 6 20 21 6 21 7 6 55 7 6 20 5 6 54 5 4 19 5 4 53 5 4 53 52 4 18 19 3 18 17 3 4 52 3 4 18 2 16 17 2 3 17 31 29 30 31 32 30 31 32 64 31 64 63 31 29 14 31 63 14 15 30 48 15 32 30 15 33 48 15 16 33 1 2 16 1 15 16 1 15 32 51 3 52 51 2 3 50 1 2 50 51 2 49 1 32 49 32 64 49 50 1]; % x, y are row vectors containing coordinates of vertices x = V(:,1)'; y = V(:,2)'; % n is the number of vertices n= size(V,1); % m is the number of interior vertices m = 32; % p is the number of triangles p= size(T,1); % Plot the mesh figure trimesh(T,x,y) % Set values at nodes % The first 32 entries are interior vertices, the final 32 are % boundary vertices. z = x+2.5; % Set node values to a linear funtion. z(49:64) = 0; % Set inner boundary nodes to zero. z(1:32) = 0; % Set interior nodes to zero. % Plot the mesh with node values specified. figure trimesh(T,x,y,z)   "
},
{
  "id": "prg-mywedge",
  "level": "2",
  "url": "sec-programs-used.html#prg-mywedge",
  "type": "Program",
  "number": "A.2.9",
  "title": "mywedge",
  "body": " mywedge   % Construct a Wedge-shaped region and its triangulation clear all % Set up internal nodes (manually): V = [ .89*cos(pi\/8) .89*sin(pi\/8); 1.9*cos(pi\/8) 1.9*sin(pi\/8); 3*cos(pi\/12) 3*sin(pi\/12); 3*cos(pi\/6) 3*sin(pi\/6) ; 4*cos(pi\/16) 4*sin(pi\/16); 4*cos(pi\/8) 4*sin(pi\/8); 4*cos(3*pi\/16) 4*sin(3*pi\/16) 4.6*cos(.03*pi) 4.6*sin(.028*pi); 4.6*cos(.22*pi) 4.6*sin(.222*pi) ]; m= size(V,1); % m = number internal nodes % Set up boundary nodes (manually) and append: a = cos(pi\/4); V = [ V; 0 0 ; 1 0 ; 2 0 ; 3 0 ; 4 0 ; 5 0 ; a a ; 2*a 2*a; 3*a 3*a; 4*a 4*a; 5*a 5*a]; for i = 1:4 x = 5*cos(pi*i\/20); y = 5*sin(pi*i\/20); V = [ V; x y]; end n = size(V,1); % n = total number nodes % extract x and y coordinates of all nodes x = V(:,1)'; y = V(:,2)'; % make triangulation T = delaunay(x,y); p = size(T,1); % p = number of triangles % Plot the mesh figure trimesh(T,x,y) % Set node values to a function z = sin(x\/2)+(y\/3).^2; z(1:9) = 0; % Plot the mesh with node values specified. figure trimesh(T,x,y,z)   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
