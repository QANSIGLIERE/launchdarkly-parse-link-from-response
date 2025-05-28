var { linkParser } = require('../index');

test('Parse a server response', () => {
    let initialData = {
        _links: {
            last: { href: '/api/v2/projects/edgewater/environments?limit=1&offset=1', type: 'application/json' },
            next: { href: '/api/v2/projects/edgewater/environments?limit=1&offset=1', type: 'application/json' },
            parent: { href: '/api/v2/projects/edgewater', type: 'application/json' },
            self: { href: '/api/v2/projects/edgewater/environments?limit=1', type: 'application/json' },
        },
        totalCount: 0,
        items: [],
    };

    expect(linkParser(initialData)).toEqual({
        last: '/api/v2/projects/edgewater/environments?limit=1&offset=1',
        next: '/api/v2/projects/edgewater/environments?limit=1&offset=1',
        parent: '/api/v2/projects/edgewater',
        self: '/api/v2/projects/edgewater/environments?limit=1',
    });
});

test('Parse invalid headers', () => {
    let initialData;
    expect(linkParser(initialData)).toBeFalsy();
});

test('Parse an invalid server response', () => {
    let initialData = {
        items: [],
    };

    expect(linkParser(initialData)).toEqual(null);
});
