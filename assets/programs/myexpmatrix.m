function A = myexpmatrix(m,r)
    % produces the matrix for the explicit method for a parabolic equation
    % Inputs: m -- the size of the matrix
    %         r -- the main parameter, ck/h^2
    % Output: A -- an m by m matrix
    u = (1-2*r)*ones(m,1);  % make a vector for the main diagonal
    v = r*ones(m-1,1);    % make a vector for the upper and lower diagonals
    A = diag(u) + diag(v,1) + diag(v,-1);  % assemble
end