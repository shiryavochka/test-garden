<h1>Тестовое задание</h1>
<p><strong>Реализовать объектную модель:</strong> Яблоко, Дерево, Сад.
<strong>Цель:</strong> оценить умение проектирования и реализации объектных моделей</h2>
<strong>Язык:</strong> JS или PHP на выбор</p>
<p>Программа должна уметь добавлять деревья в сад и яблоки на деревья.
Возвращать информацию о количестве деревьяв и яблок.
</p>
<p>
  Сад - это объект со списком объектов деревьев.
Дерево - это объект со списком объектов яблок.
  Яблоки должны иметь определяться:
  <ul>
    <li>возрастом</li>
    <li>цветом</li>
    <li>размером</li>
    <li>флаг испорченности (0 - свежее, 1 - испорченное)</li>
    <li>флаг упавшего с дерева (0 - на дереве, 1 - упало)</li>
  </ul>
</p>
<p>
Каждые 30 суток на каждом дереве рождается новое яблок.
Все яблоки каждые сутки стареют на 1 день.
Яблоки падают с дерева при возрасте 30 дней.
Можно усложнить - 50% яблок могут упасть через 28 или через 32 дня по случайному выбору.
Яблоки портятся, после падения через сутки</p>
<p>
Сад имеет метод:
просчитать 1 сутки (т.е. метод, который фиксирует прохождение суток)
</p>
<p ><strong><i>Остальные методы и атрибуты объектов необходимо предусмотреть и реализовать.
В задании могут быть добавлены иные условия и возможности, если исполнителю будет интересно его усложнить (добавить время года, погоду и т.п. влияющие на рост/падение яблок, каждое упавшее яблоко может превращаться в новое дерево через время, следить за удалением яблок из массива, после того как они испортились и т.п.).
</i></strong></p>
