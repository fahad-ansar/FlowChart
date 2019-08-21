package FlowGraph;

public interface Symbol {
    int a = 0;
    public void setIsVisited(boolean isVisited);
    public boolean getIsVisited();
    public void setStatmnt(String statmnt);
    public String getStatmnt();
    public String toString();

}
