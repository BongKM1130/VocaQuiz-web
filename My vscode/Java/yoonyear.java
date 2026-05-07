import java.util.Scanner;
public class yoonyear {
        public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.println("연도를 입력하시오: ");
        int year = sc.nextInt();

        if ((year % 4 == 0 && year % 100 != 0) || year % 400==0){
            System.out.println("윤년입니다.");
        }else{System.out.println("윤년이 아닙니다.");

        }
    }
}
