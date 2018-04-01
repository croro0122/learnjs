var formattedProblems = [];
learnjs.problems.foreEach(function (problem){
	formattedProblems.push({
		code: learnjs.formatCode(problem.code),
		name: problem.name
	});
});
return formattedProblems;
