import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")

    def diameter(self):
        return self.radius * 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter():.2f}, area={self.area():.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.area() < other.area()
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.area() > other.area()
        return NotImplemented


circle1 = Circle(radius=2)
circle2 = Circle(diameter=4)

print(circle1) 
print(circle2) 

circle3 = circle1 + circle2
print(circle3)  

print(circle1 == circle2) 
print(circle1 < circle2)  
print(circle1 > circle2)   

circle_list = [Circle(radius=3), Circle(diameter=2), Circle(radius=1)]
sorted_circles = sorted(circle_list)
for circle in sorted_circles:
    print(circle)
