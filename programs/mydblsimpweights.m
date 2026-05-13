function W = mydblsimpweights(m,n)
    % Return the matrix of weights for Simpson's rule for double integrals.
    % Inputs: m -- number of intervals in the row direction.
    %              must be even.
    %         n -- number of intervals in the column direction.
    %              must be even.
    % Output: W -- a (m+1)x(n+1) matrix of the weights
    if rem(m,2)~=0 || rem(n,2)~=0
        error('m and n must be even for Simpsons rule')
    end
    % get 1-dimensional weights
    u = mysimpweights(m);
    v = mysimpweights(n);
    W = u*v';
end