interface componentProps {
  employeeName: string;
  grade: string;
  score: string;
  pass: boolean;
}
export function Employe({ employeeName, grade, score, pass }: componentProps) {
  return (
    <div className="text-gray-400  py-2 px-4 flex">
      <p>1</p>
      <div className="flex w-[100%] items-center px-4 justify-between">
        <p className="w-[25%] text-center">{employeeName}</p>
        <p className="w-[25%] text-center">{grade}</p>
        <p className="w-[25%] text-center">{score}</p>
        <button
          className={`w-[64px] py-1 text-center  rounded-full ${pass ? "text-green-500 bg-green-500/20" : "text-red-500 bg-red-500/20"}`}
        >
          {pass ? "Pass" : "Fail"}
        </button>
      </div>
    </div>
  );
}
