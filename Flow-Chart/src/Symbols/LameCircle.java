package Symbols;

import FlowGraph.Symbol;

public class LameCircle implements Symbol {

    String type = "lamecircle";
    private boolean isVisited = false;
    private String statement ="";

    public LameCircle(String title){
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
        return "Shape: "+ type +", Statement: " + statement ;
    }
}
