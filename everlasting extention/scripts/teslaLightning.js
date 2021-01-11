teslaLightning = new effect(10f, 500f, e -> {
    if(!(e.data instanceof Seq)) return;
Seq < Vec2 > lines = e.data();

stroke(3f * e.fout());
color(e.color, Color.purple, e.fin());

for (int i = 0; i < lines.size - 1; i++) {
    Vec2 cur = lines.get(i);
    Vec2 next = lines.get(i + 1);

    Lines.line(cur.x, cur.y, next.x, next.y, false);
}

for (Vec2 p : lines) {
    Fill.circle(p.x, p.y, Lines.getStroke() / 2f);
}
    }),

