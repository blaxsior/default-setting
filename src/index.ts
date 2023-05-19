import e from 'express';

const app = e();
app.use((req,res) => {
    res.send("hello, nodemon + ts-node + esmodule!");
});

app.listen(3000);