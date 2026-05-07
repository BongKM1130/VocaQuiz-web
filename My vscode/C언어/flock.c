#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/file.h>
#include <sys/types.h>
#include <sys/stat.h>

int main(int agrc,char **argv) {
    int fd;
    fd = open(argv[1],O_WRONLY | O_CREAT,0600);
    if(flock(fd,LOCK_EX)!=0) {
        printf("flcok errno\n");
        exit(0);
    }
    for (int )
}