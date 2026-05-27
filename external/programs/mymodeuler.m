function [T , Y] = mymodeuler(f,tspan,y0,n)
    % Solves dy/dt = f(t,y) with initial condition y(a) = y0
    % on the interval [a,b] using n steps of the modified Euler's method.
    % Inputs: f -- a function f(t,y) that returns a column vector of the same
    %              length as y
    %         tspan -- a vector [a,b] with the start and end times
    %         y0 -- a column vector of the initial values, y(a) = y0
    %         n  -- number of steps to use
    % Outputs: T -- a n+1 column vector containing the times
    %          Y -- a (n+1) by d matrix where d is the length of y
    %               Y(j,i) gives the ith component of y at time T(j) 

    a = tspan(1); b = tspan(2); % parse starting and ending points
    h = (b-a)/n;        % step size
    t = a; T = a; % t is the current time and T will record all times
    y = y0;       % y is the current variable values, as a column vector
    Y = y0';      % Y will record the values at all steps, each in a row
    for i = 1:n
        k1 = h*f(t,y);      % y increment based on current time
        k2 = h*f(t+h,y+k1); % y increment based on next time
        y = y + .5*(k1+k2); % update y using the average
        t = a + i*h;        % The next time.
        T = [T; t];         % Record t and y into T and Y.
        Y = [Y; y'];
    end
end