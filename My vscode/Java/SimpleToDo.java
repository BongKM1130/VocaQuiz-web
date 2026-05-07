import java.util.LinkedList;

public class SimpleToDo {
    public static void main(String args[]){
        LinkedList<String> list=new LinkedList<String>();
        list.add("크리스마스 카드 작성");
        list.add("크리스마스 선물 사기");
        list.add("크리스마스 트리 만들기");
        

        for (String todo:list) {
            System.out.println(todo);  //list 안에 있는 값을 하나씩 꺼내서 todo에 넣고 출력하는 코드야
        }
    }
}
