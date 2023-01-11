test('should take old men older then 90', () => {
    const ages = [14,88,23,100,46,21];

    let oldAges = ages.filter(p => p > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
})
test('get only completed tasks', () => {
    const tasks = [
        {id:1, title: 'bread', isDone: false},
        {id:2, title: 'sugar', isDone: true},
        {id:3, title: 'butter', isDone: false},
        {id:4, title: 'salt', isDone: true}
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})