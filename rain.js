class Rain
{
    constructor(a)
    {
        this.x=random(0,400);
        this.y=random(0,400);
        this.a=a;
    }

    display()
    {
        this.y=this.y+5;
        text(this.a,this.x,this.y)
    }
}