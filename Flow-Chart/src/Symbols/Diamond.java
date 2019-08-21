package Symbols;

import FlowGraph.Symbol;

public class Diamond implements Symbol {

    String type = "diamond";
    private boolean isVisited = false;
    private String statement ="";
    private String caseOne = "";
    private String caseTwo = "";

    public int getTo1() {
        return to1;
    }

    public void setTo1(int to1) {
        this.to1 = to1;
    }

    public int getTo2() {
        return to2;
    }

    public void setTo2(int to2) {
        this.to2 = to2;
    }

    private int to1;
    private int to2;

    public Diamond(String title){
        statement = title;
    }


    public String getCaseOne() {
        return caseOne;
    }

    public void setCaseOne(String caseOne) {
        this.caseOne = caseOne;
    }

    public String getCaseTwo() {
        return caseTwo;
    }

    public void setCaseTwo(String caseTwo) {
        this.caseTwo = caseTwo;
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
        return "Shape: "+ type +",    Statement: " + statement + ", case1:" +caseOne+", case2:"+caseTwo;
    }
}
