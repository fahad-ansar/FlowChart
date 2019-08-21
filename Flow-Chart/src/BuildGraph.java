import FlowGraph.FGraph;
import FlowGraph.Node;
import Symbols.*;
import sun.java2d.xr.GrowableRectArray;

//Todo
//fix diamond choices and pointing technique in graph
//better printing representation
  /*----Idea ^^^
  *     * can first print everything normally just do something special for diamond like in case one and two
  *      printing whole flow till the end and then come back and start case two.
  *
  * */



//change your graph to number graph with data in vertices and connection represented in array

//need optimize indexing control for programmer using library
  /*----Idea ^^^
  *     * can keep a variable for *i indexing and for *j we can have pointing to variable name
  *      or somewhat like that
  *
  *     OR
  *
  *     * we can design a flow input technique which would be putting beeds in a string without
  *      programmer's attention
  * */


public class BuildGraph {

    FGraph graph = new FGraph();
     int i = 0;
     int j = 0;

    public BuildGraph(){
        makeIt();
    }

    private void makeIt() {

        addBegin("Hey",1,0);
        addStep("Hello",0,2,1);
        addEnd("Bye",1,3,2);

        System.out.println(graph.getGraph());
    }

    //toA is pointing to
    private void addDecision(String questiontext, int in, int from, int toA, int toB){
        graph.addElement(in, 0, from, new Diamond(questiontext));
    }

    private void addBegin(String text, int to, int in){
        graph.addElement(in, to, 0, new Oval(text));
    }

    private void addEnd(String text, int from, int to, int in){
        graph.addElement(in, 0, from, new Oval(text));
    }

    private void addStep(String text, int from, int to, int in){
        graph.addElement(in, to, from, new Rectange(text));
    }

    private void addSpecialEnd(String text, int from, int in){
        graph.addElement(in, 0, from, new SpecialSquare(text));
    }

    private void addLameEnd(String text, int from, int in){
        graph.addElement(in, 0, from, new LameCircle(text));
    }

    public static void main(String[] args) {
        BuildGraph b= new BuildGraph();
    }
}
