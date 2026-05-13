% Plot the deflection y of a beam of length L under tension T
% and a uniform load w. Uses the exact analytic solution of the
% boundary value problem. For T=0, the solution breaks down.
% For T (e.g. T=.1) close to zero using the exact solution leads to loss
% of precision.
% Coefficients for a structural steel I-beam W12x22 in lb. in.
E = 29000000
I = 121
L = 120
% Load and tension
w = 10000
T = 10000
% calculated coefficients
EI = E*I
a = T/EI
b = w/(2*EI)
K = exp(sqrt(a)*L)
d5 = 2*b/(a^2)
d2 = - d5*(1/(1+K))
d1 = d2*K
d3 = b/a
d4 = - d3*L
% grid
xx = linspace(0,L,101);
% deflection
yy = d1*exp(-sqrt(a)*xx) + d2*exp(sqrt(a)*xx) + d3*xx.^2 + d4*xx + d5;
%plot the result
plot(xx,yy,'r')

