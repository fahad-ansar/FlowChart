package FlowGraph;

import java.util.ArrayList;
import java.util.LinkedList;

public class FGraph {


    private ArrayList<ArrayList<Node>> gTable ;

    public FGraph(){
        gTable = new ArrayList<ArrayList<Node>>();
        gTable.add(new ArrayList<Node>());
    }

    public void addElement(int gIndex, int to, int from,  Symbol symbol){
        if(gIndex>=gTable.size()){
            gTable.add(new ArrayList<Node>());
        }

        gTable.get(gIndex).add(new Node(symbol,to,from));
    }

    public void removeConnection(int element, int connection){
        for (int k = 0; k <gTable.get(element).size() ; k++) {
            if(gTable.get(element).get(k).getTo()==connection){
                gTable.get(element).remove(k);
            }
        }
    }

    public ArrayList<ArrayList<Node>> getGraph(){
        return gTable;
    }

    public void removeElement(int element){
            gTable.remove(element);
    }

    public String  printNullTable(){
        String result = "";
        System.out.println(gTable.size());
        for (int i = 0; i <gTable.size() ; i++) {
             result+=i+" |";
            for (int j = 0; j <gTable.get(i).size() ; j++) {
                    result+=gTable.get(i).get(j).getTo();
            }
            result+="\n";
        }
        return result;
    }

    public String toString(){
        String result = "";
        System.out.println(gTable.size());
        for (int i = 0; i <gTable.size() ; i++) {
            for (int j = 0; j <gTable.get(i).size() ; j++) {
                result+= "i:"+i+" j:" +j + " ->"+gTable.get(i).get(j).toString();
            }
            result+="\n";
        }
        return result;
    }

}
