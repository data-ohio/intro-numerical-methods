% Construct a Wedge-shaped region and its triangulation

clear all

% Set up internal nodes (manually):
V = [ .89*cos(pi/8) .89*sin(pi/8);
	 1.9*cos(pi/8) 1.9*sin(pi/8);
	 3*cos(pi/12) 3*sin(pi/12);
	 3*cos(pi/6) 3*sin(pi/6) ;
	 4*cos(pi/16) 4*sin(pi/16);
	 4*cos(pi/8) 4*sin(pi/8);
	 4*cos(3*pi/16) 4*sin(3*pi/16) 
	 4.6*cos(.03*pi) 4.6*sin(.028*pi);
	 4.6*cos(.22*pi) 4.6*sin(.222*pi) ];
m= size(V,1); % m = number internal nodes

% Set up boundary nodes (manually) and append:
a = cos(pi/4);
V = [ V;  0 0 ; 1 0 ; 2 0 ; 3 0 ; 4 0 ; 5 0 ;
       a a ; 2*a 2*a; 3*a 3*a; 4*a 4*a; 5*a 5*a]; 
for i = 1:4
  x = 5*cos(pi*i/20);
  y = 5*sin(pi*i/20);
  V = [ V; x y];
end
n = size(V,1);  % n = total number nodes

% extract x and y coordinates of all nodes
x = V(:,1)';
y = V(:,2)';
% make triangulation
T = delaunay(x,y); 
p = size(T,1); % p = number of triangles

% Plot the mesh
figure
trimesh(T,x,y)

% Set node values to a function
z = sin(x/2)+(y/3).^2;
z(1:9) = 0;

% Plot the mesh with node values specified.
figure
trimesh(T,x,y,z)

