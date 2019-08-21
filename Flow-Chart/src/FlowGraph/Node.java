package FlowGraph;

public class Node {

    private int to;
    private int from;
    private Symbol vertex;

    public Node(Symbol s, int to, int from) {
        vertex =s;
        this.to=to;
        this.from=from;
    }

    public int getFrom() {
        return from;
    }

    public void setFrom(int from) {
        this.from = from;
    }

    public int getTo() {
        return to;
    }

    public void setTo(int to) {
        this.to = to;
    }

    public Symbol getVertex() {
        return vertex;
    }

    public void setVertex(Symbol vertex) {
        this.vertex = vertex;
    }

    @Override
    public String toString() {
        return vertex.toString();
    }
}
