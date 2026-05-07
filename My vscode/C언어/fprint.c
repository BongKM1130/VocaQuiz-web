#include <stdio.h>  //4.4
#include "student.h"
int main(int argc, char *argv[]) {   //int argc argument count (인자 개수) 실행할 때 입력한 값의 개수 char *argv[] argument vector (인자 목록) 문자열 배열 (명령어들 저장됨)
    struct student rec;
    FILE *fp;

    if (argc != 2) {     //파일이름 입력 안했을 때 오류 메시지 출력
        fprintf(stderr,"사용법: %s 파일이름\n",argv[0]);   
        return 1;
    }
    fp = fopen(argv[1],"w");
    printf("%-9s %-7s %-4s\n","학번","이름","점수");   
    
    while (scanf("%d %s %d",&rec.id,rec.name,&rec.score) == 3) {
        fprintf(fp,"%d %s %d\n",rec.id,rec.name,rec.score);
    }
    fclose(fp);
    return 0;
}