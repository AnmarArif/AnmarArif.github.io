---
layout: post
title: Your first linear program in Python
description: A small economic dispatch problem solved with Pyomo
colab: ""
---

<!-- This is a draft template. It does not appear on the site until you move it
     to the _posts folder and name it with a date, for example
     _posts/2026-10-20-first-linear-program-in-python.md -->

Two generators must supply a load of 150 MW at the lowest cost. Generator 1 costs 20 $/MWh and can produce up to 100 MW. Generator 2 costs 30 $/MWh and can produce up to 120 MW.

## The model

```python
import pyomo.environ as pyo

m = pyo.ConcreteModel()
m.p1 = pyo.Var(bounds=(0, 100))
m.p2 = pyo.Var(bounds=(0, 120))

m.cost = pyo.Objective(expr=20 * m.p1 + 30 * m.p2, sense=pyo.minimize)
m.balance = pyo.Constraint(expr=m.p1 + m.p2 == 150)

pyo.SolverFactory("highs").solve(m)
print(pyo.value(m.p1), pyo.value(m.p2), pyo.value(m.cost))
```

The cheaper unit runs at its limit of 100 MW and the second unit covers the remaining 50 MW, for a total cost of 3500 $/h.

## Try it yourself

Change the load to 200 MW and predict the answer before you run the code.
