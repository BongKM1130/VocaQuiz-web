import javax.swing.JFrame;
public class MyWin extends JFrame {
    public MyWin() {
        super("223612봉경민");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(300,200);
        setVisible(true);
    }    
    public static void main(String args[]) {
        MyWin jf = new MyWin();
    }
}
