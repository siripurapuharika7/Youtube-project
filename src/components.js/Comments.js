const commentsdata = [
  {
    name: "harika",
    content: "lorem ipsum dolor",
    replies: [],
  },
  {
    name: "harika",
    content: "lorem ipsum dolor",
    replies: [
      {
        name: "harika",
        content: "lorem ipsum dolor",
        replies: [
          {
            name: "harika",
            content: "lorem ipsum dolor",
            replies: [
              {
                name: "harika",
                content: "lorem ipsum dolor",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment=({data})=>{
  const{name,content}=data;
    return(
        <div className="flex gap-4 m-3 shadow-sm bg-gray-100 p-4 rounded-md">
          <img className="w-12 h-12" alt="img2" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"></img>
          <div>
            <p className="font-bold">{name}</p>
            <p>{content}</p>
          </div>

        </div>
    )
}

const Comments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <Comment data={commentsdata[0]}/>
    </div>
  );
};
export default Comments;
