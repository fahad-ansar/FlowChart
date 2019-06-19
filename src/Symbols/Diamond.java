package Symbols;

import FlowGraph.Vertex;

public class Diamond implements Vertex {

    private boolean isVisited = false;
    private String statement ="";
    private String caseOne = "";
    private String caseTwo = "";

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
}
