
```renpy
define test_char = Character('Test Char')

label start:

    centered "Centered text"
    test_char "Hello, world!"
    undefined_char "Hello!"
    
    return

```

```python-traceback
I'm sorry, but an uncaught exception occurred.

While running game code:
  File "game/script.rpy", line 8, in script
    undefined_char "Hello!"
Exception: Sayer 'undefined_char' is not defined.

-- Full Traceback ------------------------------------------------------------

Full traceback:
  File "game/script.rpy", line 8, in script
    undefined_char "Hello!"
  File "C:\Users\tumeo\Documents\Renpy\renpy-6.99.7-sdk\renpy\ast.py", line 583, in execute
    who = eval_who(self.who, self.who_fast)
  File "C:\Users\tumeo\Documents\Renpy\renpy-6.99.7-sdk\renpy\ast.py", line 500, in eval_who
    raise Exception("Sayer '%s' is not defined." % who.encode("utf-8"))
Exception: Sayer 'undefined_char' is not defined.

Windows-8-6.2.9200
Ren'Py 6.99.7.858
teste_videos 0.0

```
