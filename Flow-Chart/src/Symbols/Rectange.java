package Symbols;

import FlowGraph.Symbol;

public class Rectange implements Symbol {

    String type = "rectangle";
    private boolean isVisited = false;
    private String statement ="";

    public Rectange(String title){
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

    @Override
    public String toString(){
        return "Shape: "+ type +",  Statement: " + statement;
    }
}
