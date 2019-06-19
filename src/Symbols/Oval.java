package Symbols;

import FlowGraph.Vertex;

public class Oval implements Vertex {
    private boolean isVisited = false;
    private String statement ="";

    public Oval(String title){
        statement = title;
    }


    @Override
    public void setIsVisited(boolean isVisited) {
        this.isVisited =isVisited;
    }

    @Override
    public boolean getIsVisited() {
        return isVisited;
    }

    @Override
    public void setStatmnt(String statmnt) {
        statement = statmnt;
    }

    @Override
    public String getStatmnt() {
        return statement;
    }

}
