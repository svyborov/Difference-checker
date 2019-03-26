# project-lvl2-s369
<a href="https://codeclimate.com/github/svyborov/project-lvl2-s369/maintainability"><img src="https://api.codeclimate.com/v1/badges/6d3b839b200ee547837b/maintainability" /></a>
<a href="https://codeclimate.com/github/svyborov/project-lvl2-s369/test_coverage"><img src="https://api.codeclimate.com/v1/badges/6d3b839b200ee547837b/test_coverage" /></a>
[![Build Status](https://travis-ci.org/svyborov/project-lvl2-s369.svg?branch=master)](https://travis-ci.org/svyborov/project-lvl2-s369)

В рамках данного проекта была реализована утилита для поиска отличий в конфигурационных файлах.

Возможности утилиты:
- Поддержка разных форматов
- Генерация отчета в виде plain text, pretty и json

## Install

```bash
$ npm install -g gendiff_vsa123
```
## Example
```bash
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```

Пример использования:
1. <a href="https://asciinema.org/a/4cBK4RTXnXnayjZBJPa9P07w0" rel="nofollow">Установка и опции</a> <br>
2. <a href="https://asciinema.org/a/DG7eRpvSvahK1nMhtbV958e9s" rel="nofollow">Сравнение json файлов</a> <br>
3. <a href="https://asciinema.org/a/qCS4BZr5qDzOHCcWsVo982PqY" rel="nofollow">Сравнение yaml файлов</a> <br>
4. <a href="https://asciinema.org/a/cj8UF7JiYgfVL11n6y7cKV9iv" rel="nofollow">Сравнение ini файлов</a> <br>
5. <a href="https://asciinema.org/a/ijq4Q0LQzZkBAJ9Sy7uGWNYUA" rel="nofollow">Рекурсивное сравнение файлов</a> <br>
6. <a href="https://asciinema.org/a/OSA7PhJzbJMl9cVweV1I8KILi" rel="nofollow">Пример указания формата вывода</a> <br>
7. <a href="https://asciinema.org/a/P9gNnohUjlIxGIsduO4ajFO3l" rel="nofollow">Пример вывода в формате json</a> <br>
