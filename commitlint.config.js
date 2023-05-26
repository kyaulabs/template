module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'patch', 'fix', 'doc', 'perf', 'refactor', 'revert', 'style', 'test', 'ci', 'chore', 'ignore']],
	}
}
