#!/bin/bash

FILE="src/cli.js"

# Убираем export у const и function
sed -i.bak -E 's/^export (const|function) /\\1 /' "$FILE"

# Получаем имя первой объявленной сущности (const или function)
export_name=$(grep -E '^(const|function) ' "$FILE" | head -1 | sed -E 's/^(const|function) ([^ =\(]+).*/\2/')

# Проверяем, есть ли уже export default
if grep -q 'export default' "$FILE"; then
  echo "export default уже присутствует, ничего не добавляем"
else
  echo "export default $export_name;" >> "$FILE"
  echo "Добавлен export default $export_name;"
fi
