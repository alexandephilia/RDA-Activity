// Sample data array
const cardData = [
    // First page (1-8)
    {
        title: "ESS Web/Mobile Development",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:00 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "SIAPP Web Development",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:00 AM",
        checkOut: "05:30 PM",
        activityStatus: "postponed",
        duration: "2d 8h",
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "HR System Integration",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:30 AM",
        checkOut: "04:30 PM",
        activityStatus: "completed",
        duration: "1d 6h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:45"
        }
    },
    {
        title: "Financial Dashboard",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:00 AM",
        checkOut: "04:30 PM",
        activityStatus: "completed",
        duration: "1d 6h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:45"
        }
    },
    {
        title: "Security Audit System",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "10:00 AM",
        checkOut: "06:00 PM",
        activityStatus: "completed",
        duration: "1d 8h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 18:15"
        }
    },
    {
        title: "Customer Portal Update",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:15 AM",
        checkOut: "06:00 PM",
        activityStatus: "completed",
        duration: "3d 4h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 18:15"
        }
    },
    {
        title: "Inventory Management",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:45 AM",
        checkOut: "05:45 PM",
        activityStatus: "completed",
        duration: "2d 7h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:45"
        }
    },
    {
        title: "Analytics Platform",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:30 AM",
        checkOut: "03:30 PM",
        activityStatus: "completed",
        duration: "4d 2h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 10:30"
        }
    },
    // Second page (9-16)
    {
        title: "Mobile App Development",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:00 AM",
        checkOut: "04:00 PM",
        activityStatus: "completed",
        duration: "1d 8h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:00"
        }
    },
    {
        title: "Cloud Infrastructure",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:45 AM",
        checkOut: "04:15 PM",
        activityStatus: "completed",
        duration: "5d 2h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:30"
        }
    },
    {
        title: "Data Migration Project",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:30 AM",
        checkOut: "05:30 PM",
        activityStatus: "completed",
        duration: "2d 8h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:30"
        }
    },
    {
        title: "Network Security Update",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:15 AM",
        checkOut: "05:45 PM",
        activityStatus: "completed",
        duration: "1d 9h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:45"
        }
    },
    {
        title: "UI/UX Enhancement",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "10:15 AM",
        checkOut: "06:15 PM",
        activityStatus: "completed",
        duration: "2d 8h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 18:15"
        }
    },
    {
        title: "Database Optimization",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:00 AM",
        checkOut: "03:00 PM",
        activityStatus: "completed",
        duration: "2d 5h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 15:30"
        }
    },
    {
        title: "API Integration",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:45 AM",
        checkOut: "05:45 PM",
        activityStatus: "completed",
        duration: "2d 8h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:45"
        }
    },
    {
        title: "DevOps Pipeline",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:30 AM",
        checkOut: "04:45 PM",
        activityStatus: "completed",
        duration: "3d 6h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:00"
        }
    }
];

// First, let's add the additional employee data to our cardData objects
cardData.forEach(card => {
    card.employee = {
        ...card.employee,
        email: "elon.musk@realta.net",
        department: "Research & Development",
        manager: {
            name: "Jensen Huang",
            email: "jensen.huang@realta.net"
        }
    };
});

// First, let's add the additional activity data to our cardData objects
cardData.forEach(card => {
    card.activity = {
        ...card.activity,
        application: "ESS Web/Mobile",
        programId: "PRG-2024-001",
        huddle: "Daily Standup Meeting",
        project: {
            sproBest: "RSF",
            name: card.title
        },
        category: {
            main: "Enhancement",  // Default main category
            type: "New Feature"   // Default type from our mapping
        },
        softwareDev: true,
        note: "Implementing new features for customer portal including authentication improvements and dashboard optimization.",
        description: "Detailed explanation of the activity including technical specifications and implementation details for the customer portal enhancement project."
    };
});

// Configuration
const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let filteredData = [...cardData]; // Store filtered data

// State management for SPA
let currentView = 'list'; // 'list' or 'detail'
let selectedCard = null;

// Category mapping data
const categoryMapping = {
    'Enhancement': [
        'New Feature',
        'UI/UX Improvement',
        'Performance Optimization',
        'Code Refactoring',
        'Integration Enhancement'
    ],
    'Bug Fix': [
        'Critical Error',
        'Security Issue',
        'Data Integrity',
        'UI/UX Issue',
        'Performance Bug'
    ],
    'Maintenance': [
        'Database Cleanup',
        'Code Optimization',
        'Version Update',
        'Security Update',
        'Performance Tuning'
    ],
    'Documentation': [
        'API Documentation',
        'User Manual',
        'Code Comments',
        'Release Notes',
        'Technical Specs'
    ],
    'Support': [
        'User Training',
        'Technical Support',
        'Data Analysis',
        'System Monitoring',
        'Issue Investigation'
    ]
};

// Function to filter data based on search query
function filterData(query) {
    if (!query) {
        filteredData = [...cardData];
        return;
    }
    
    query = query.toLowerCase().trim();
    filteredData = cardData.filter(card => {
        return (
            card.title.toLowerCase().includes(query) ||
            card.employee.name.toLowerCase().includes(query) ||
            card.employee.code.toLowerCase().includes(query) ||
            card.division.toLowerCase().includes(query) ||
            (card.activityStatus && card.activityStatus.toLowerCase().includes(query)) ||
            (card.checkIn && card.checkIn.toLowerCase().includes(query)) ||
            (card.checkOut && card.checkOut.toLowerCase().includes(query))
        );
    });
}

// Function to perform search
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value;
    currentPage = 1; // Reset to first page when searching
    filterData(query);
    renderCards();
}

// Function to generate skeleton card HTML
function generateSkeletonCardHTML() {
    return `
        <div class="col-12 col-xl-3 col-lg-4">
            <div class="card h-100 p-3 skeleton-card">
                <div class="card-body p-0">
                    <div class="d-flex justify-content-between">
                        <div class="skeleton-title skeleton" style="width: 60%;"></div>
                        <div class="skeleton-badge skeleton"></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="skeleton-text skeleton medium"></div>
                        <div class="skeleton-badge skeleton" style="width: 60px;"></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div class="skeleton-text skeleton short"></div>
                        <div class="skeleton-text skeleton short"></div>
                    </div>
                    <div class="skeleton-divider"></div>
                    <div class="mt-3">
                        <div class="d-flex justify-content-between">
                            <div class="skeleton-text skeleton short"></div>
                            <div class="skeleton-text skeleton short"></div>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="skeleton-text skeleton short"></div>
                            <div class="skeleton-text skeleton short"></div>
                        </div>
                        <div class="skeleton-approval">
                            <div class="d-flex justify-content-between">
                                <div class="skeleton-text skeleton short"></div>
                                <div class="skeleton-badge skeleton"></div>
                            </div>
                            <div class="skeleton-text skeleton medium mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to show skeleton loading
function showSkeletonLoading() {
    const container = document.getElementById('cardsContainer');
    const skeletonHTML = Array(ITEMS_PER_PAGE).fill(generateSkeletonCardHTML()).join('');
    container.innerHTML = skeletonHTML;
}

// Function to refresh data
function refreshData() {
    const searchInput = document.querySelector('.search-input');
    const refreshButton = document.querySelector('.btn-refresh');
    
    // Clear search input
    searchInput.value = '';
    
    // Show skeleton loading
    showSkeletonLoading();
    
    // Add rotation animation to refresh button
    const icon = refreshButton.querySelector('i');
    icon.style.transition = 'transform 0.5s ease';
    icon.style.transform = 'rotate(360deg)';
    
    // Simulate loading delay and then reset data
    setTimeout(() => {
        // Reset to original data
        filteredData = [...cardData];
        currentPage = 1;
        
        // Render cards
        renderCards();
        
        // Reset refresh button
        icon.style.transform = '';
    }, 1000); // Show skeleton for 1 second
}

// Function to generate a single card HTML
function generateCardHTML(data) {
    const cardHtml = `
        <div class="col-12 col-sm-6 col-xl-3 col-lg-4">
            <div class="card h-100 p-3 cursor-pointer" data-card-id="${cardData.indexOf(data)}">
                <div class="card-body p-0">
                    <div class="d-flex justify-content-between">
                        <div class="time-info">
                            <h5 class="card-title">${data.title}</h5>
                        </div>
                        <div class="time-info text-end">
                            <span class="status-badge status-${data.status}">${data.status === 'check-in' ? 'Check In' : 'Check Out'}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="d-flex align-items-center gap-2">
                            <span class="employee-name">${data.employee.name}</span>
                            <span class="vertical-separator"></span>
                            <span class="employee-code">${data.employee.code}</span>
                        </div>
                        <div class="division-info">
                            <span class="division-badge">${data.division}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="time-info">
                            <span class="time-label">Check In:</span>
                            <span class="time-value">${data.checkIn}</span>
                        </div>
                        <div class="time-info text-end">
                            <span class="time-label">Check Out:</span>
                            <span class="time-value">${data.checkOut || '-'}</span>
                        </div>
                    </div>
                    <div class="card-divider"></div>
                    <div class="mt-3">
                        <div class="d-flex justify-content-between">
                            <span class="activity-status">Activity Status</span>
                            ${data.activityStatus ? `
                                <span class="activity-status status-${data.activityStatus}">
                                    ${data.activityStatus.charAt(0).toUpperCase() + data.activityStatus.slice(1)}
                                </span>
                            ` : '<span class="activity-status">-</span>'}
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <span class="activity-status">Duration</span>
                            <span class="activity-status">${data.duration || '-'}</span>
                        </div>
                        <div class="approval-section mt-2">
                            <div class="d-flex flex-column gap-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="approval-label">Approval Status</span>
                                    ${data.approval.status ? `
                                        <span class="approval-badge approval-${data.approval.status}">${data.approval.status.charAt(0).toUpperCase() + data.approval.status.slice(1)}</span>
                                    ` : '<span class="approval-badge">-</span>'}
                                </div>
                                <div class="approval-info">
                                    <span class="approver-name">${data.approval.approver}</span>
                                    <span class="approval-time">${data.approval.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return cardHtml;
}

// Function to render cards for current page
function renderCards() {
    const container = document.getElementById('cardsContainer');
    
    // Check if there are no results
    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="card h-100 p-4 text-center no-results-card">
                    <div class="card-body">
                        <i class="bi bi-search mb-3" style="font-size: 2rem;"></i>
                        <h5 class="mb-2">No RDA Entry Found</h5>
                        <p class="text-muted mb-0">No results found. Try a different search.</p>
                    </div>
                </div>
            </div>
        `;
        // Hide pagination when no results
        document.querySelector('.pagination-wrapper').style.display = 'none';
        return;
    }

    // Show pagination when there are results
    document.querySelector('.pagination-wrapper').style.display = 'block';
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentCards = filteredData.slice(startIndex, endIndex);
    
    container.innerHTML = currentCards.map(card => generateCardHTML(card)).join('');
    updatePagination();
    
    // Add click handlers to cards
    addCardClickHandlers();
}

// Function to update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginationContainer = document.querySelector('.pagination');
    
    // Reset current page if it exceeds total pages
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    // Previous button
    let paginationHTML = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}" ${currentPage === 1 ? 'tabindex="-1" aria-disabled="true"' : ''}>
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
    }

    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'tabindex="-1" aria-disabled="true"' : ''}>
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;

    paginationContainer.innerHTML = paginationHTML;
    
    // Add click event listeners to pagination items
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the clicked element or its closest page-link parent
            const pageLink = e.target.closest('.page-link');
            if (!pageLink) return;
            
            const newPage = parseInt(pageLink.dataset.page);
            if (!isNaN(newPage) && newPage !== currentPage && newPage > 0 && newPage <= totalPages) {
                currentPage = newPage;
                // Ensure scroll happens before rendering
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                    renderCards();
                }, 100); // Small delay to ensure smooth scroll starts first
            }
        });
    });
}

// Add state variable for current view selection
let currentViewSelection = 'FAVORITE SEARCHES';

// Function to show list view
function showListView() {
    // Scroll to top when showing list view
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    currentView = 'list';
    selectedCard = null;
    
    // Restore default search section with original structure
    const searchSection = document.querySelector('.search-section');
    searchSection.innerHTML = `
        <div class="d-flex align-items-center justify-content-between gap-2">
            <div class="search-input-group flex-grow-1">
                <div class="input-group">
                    <input type="text" class="form-control search-input" placeholder="Search RDA...">
                    <button class="btn btn-refresh">
                        <i class="bi bi-arrow-clockwise"></i><span class="d-none d-md-inline ms-2">Refresh</span>
                    </button>
                </div>
            </div>
            <div>
                <button class="btn btn-new-activity">
                    <i class="bi bi-plus-lg"></i>New Activity
                </button>
            </div>
        </div>
        <!-- Add Favorite Searches Dropdown -->
        <div class="favorite-searches mt-2">
            <div class="dropdown">
                <button class="btn btn-favorite dropdown-toggle w-100 text-start" type="button" id="favoriteSearchesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-star me-2"></i>${currentViewSelection}
                </button>
                <ul class="dropdown-menu w-100" aria-labelledby="favoriteSearchesDropdown">
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">User - My Approved RDA</a></li>
                    <li><a class="dropdown-item" href="#">User - My Outstanding RDA</a></li>
                    <li><a class="dropdown-item" href="#">User - My Outstanding RDA Today</a></li>
                    <li><a class="dropdown-item" href="#">User - My RDA</a></li>
                    <li><a class="dropdown-item" href="#">User - My RDA Today</a></li>
                    <li><a class="dropdown-item" href="#">User - My Rejected RDA</a></li>
                    <li><a class="dropdown-item" href="#">User Approver - My Team's Outstanding RDA</a></li>
                    <li><a class="dropdown-item" href="#">User Approver - My Team's Outstanding RDA Today</a></li>
                    <li><a class="dropdown-item" href="#">User Approver - My Team's RDA</a></li>
                    <li><a class="dropdown-item" href="#">User Approver - My Team's RDA Today</a></li>
                </ul>
            </div>
        </div>
    `;

    // Re-initialize event listeners
    initializeEventListeners();
    
    // Add click handler for new activity button
    document.querySelector('.btn-new-activity').addEventListener('click', (e) => {
        e.preventDefault();
        showNewActivityForm();
    });
    
    // Show pagination
    document.querySelector('.pagination-wrapper').style.display = 'block';
    
    // Render cards
    renderCards();
}

// Function to show new activity form
function showNewActivityForm() {
    currentView = 'new';
    
    // Get user data from the first card (our source of truth)
    const userData = cardData[0].employee;
    
    // Get current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    // Update header section with back button
    const searchSection = document.querySelector('.search-section');
    searchSection.innerHTML = `
        <div class="detail-header">
            <button class="btn btn-back">
                <i class="bi bi-arrow-left"></i>
            </button>
            <h4>New Activity</h4>
        </div>
    `;

    // Add click handler for back button
    document.querySelector('.btn-back').addEventListener('click', showListView);

    // Update content section with form
    const container = document.getElementById('cardsContainer');
    container.innerHTML = generateNewActivityFormHTML(userData, formattedDateTime);

    // Hide pagination
    document.querySelector('.pagination-wrapper').style.display = 'none';

    // Add form submission handler
    document.getElementById('newActivityForm').addEventListener('submit', handleNewActivitySubmit);

    // Initialize category types dropdown
    updateCategoryTypes();
}

// Function to generate new activity form HTML
function generateNewActivityFormHTML(userData, formattedDateTime) {
    // Project options
    const projectSproBestOptions = ['RSF', 'HRD', 'FIN', 'MKT', 'OPS'];
    const projectNameOptions = [
        'ESS Web/Mobile Development',
        'SIAPP Web Development',
        'HR System Integration',
        'Financial Dashboard',
        'Security Audit System'
    ];
    
    // Generate dropdown options HTML
    const sproBestOptionsHTML = projectSproBestOptions.map(option => 
        `<option value="${option}" ${option === userData.division ? 'selected' : ''}>${option}</option>`
    ).join('');
    
    const projectNameOptionsHTML = projectNameOptions.map(option => 
        `<option value="${option}">${option}</option>`
    ).join('');

    // Generate category options HTML
    const categoryOptionsHTML = Object.keys(categoryMapping).map(category => 
        `<option value="${category}">${category}</option>`
    ).join('');

    return `
        <div class="col-12">
            <form id="newActivityForm" class="card detail-card">
                <div class="card-body p-1">
                    <!-- Employee Information Section -->
                    <div class="detail-section mb-4">
                        <div class="section-header collapsed" onclick="toggleSection(this)">
                            <i class="bi bi-chevron-down"></i>
                            <h5 class="section-title mb-0">Employee Information</h5>
                        </div>
                        <div class="section-content collapsed">
                            <div class="row g-3 mt-3">
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Full Name</label>
                                        <span class="detail-value">${userData.name}</span>
                                        <input type="hidden" id="fullName" value="${userData.name}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Initial</label>
                                        <span class="detail-value employee-code">${userData.code}</span>
                                        <input type="hidden" id="initial" value="${userData.code}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Email</label>
                                        <span class="detail-value">${userData.email}</span>
                                        <input type="hidden" id="email" value="${userData.email}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Department</label>
                                        <span class="detail-value">${userData.department}</span>
                                        <input type="hidden" id="department" value="${userData.department}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Manager Name</label>
                                        <span class="detail-value">${userData.manager.name}</span>
                                        <input type="hidden" id="managerName" value="${userData.manager.name}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Manager Email</label>
                                        <span class="detail-value">${userData.manager.email}</span>
                                        <input type="hidden" id="managerEmail" value="${userData.manager.email}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Division</label>
                                        <span class="division-badge">${userData.division || 'RSF'}</span>
                                        <input type="hidden" id="division" value="${userData.division || 'RSF'}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Time Information Section -->
                    <div class="detail-section mb-4">
                        <div class="section-header collapsed" onclick="toggleSection(this)">
                            <i class="bi bi-chevron-down"></i>
                            <h5 class="section-title mb-0">Time Activity</h5>
                        </div>
                        <div class="section-content collapsed">
                            <div class="row g-3 mt-3">
                                <div class="row g-3 mb-3 time-activity-cards">
                                    <div class="col-6">
                                        <div class="detail-status-card check-in no-hover">
                                            <div class="detail-info-group">
                                                <label class="detail-label">Check In Time</label>
                                                <span class="detail-value">-</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="detail-status-card check-out no-hover">
                                            <div class="detail-info-group">
                                                <label class="detail-label">Check Out Time</label>
                                                <span class="detail-value">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Created By</label>
                                        <span class="detail-value">${userData.name}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Created On</label>
                                        <span class="detail-value">${formattedDateTime}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Modified By</label>
                                        <span class="detail-value">${userData.name}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Modified On</label>
                                        <span class="detail-value">${formattedDateTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detail Activity Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Detail Activity</h5>
                        <div class="row g-4">
                            <!-- Status Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Status</label>
                                    <span class="activity-status status-draft large-badge">Draft</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="activityTitle">Activity Title</label>
                                    <input type="text" class="form-control" id="activityTitle" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="huddle">Related Huddle Subject (If Any)</label>
                                    <input type="text" class="form-control" id="huddle">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="projectSproBest">Project SproBest</label>
                                    <select class="form-select" id="projectSproBest" required>
                                        <option value="" disabled selected>Select Project SproBest</option>
                                        ${sproBestOptionsHTML}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="projectName">Project Name</label>
                                    <select class="form-select" id="projectName" required>
                                        <option value="" disabled selected>Select Project Name</option>
                                        ${projectNameOptionsHTML}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Software Development</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="softwareDev">
                                        <label class="form-check-label" for="softwareDev">Yes</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="application">Application</label>
                                    <input type="text" class="form-control" id="application" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="programId">Program ID</label>
                                    <input type="text" class="form-control" id="programId" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="category">Category</label>
                                    <select class="form-select" id="category" required onchange="updateCategoryTypes()">
                                        <option value="" disabled selected>Select Category</option>
                                        ${categoryOptionsHTML}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Category Type</label>
                                    <span class="detail-value" id="categoryTypeValue">-</span>
                                    <input type="hidden" id="categoryType" value="">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="activityNote">Activity Note</label>
                                    <textarea class="form-control activity-note" id="activityNote" rows="3" required></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label" for="activityDescription">Description</label>
                                    <textarea class="form-control activity-note" id="activityDescription" rows="3" required></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="text-end">
                        <button type="submit" class="btn btn-new-activity">
                            <i class="bi bi-save"></i>Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `;
}

// Function to update category types based on selected category
function updateCategoryTypes() {
    const categorySelect = document.getElementById('category');
    const categoryTypeSpan = document.getElementById('categoryTypeValue');
    const categoryTypeInput = document.getElementById('categoryType');
    const selectedCategory = categorySelect.value;

    if (selectedCategory && categoryMapping[selectedCategory]) {
        // Show first type from the mapping as text
        const defaultType = categoryMapping[selectedCategory][0];
        categoryTypeSpan.textContent = defaultType;
        categoryTypeInput.value = defaultType;
    } else {
        // Show dash if no category selected
        categoryTypeSpan.textContent = '-';
        categoryTypeInput.value = '';
    }
}

// Function to show detail view
function showDetailView(cardData) {
    // First update the view state
    selectedCard = cardData;
    currentView = 'detail';
    
    // Update header section
    const searchSection = document.querySelector('.search-section');
    searchSection.innerHTML = `
        <div class="detail-header">
            <button class="btn btn-back">
                <i class="bi bi-arrow-left"></i>
            </button>
            <h4>Realta Daily Activity</h4>
        </div>
    `;

    // Add click handler for back button
    document.querySelector('.btn-back').addEventListener('click', showListView);

    // Update content section
    const container = document.getElementById('cardsContainer');
    container.innerHTML = generateDetailViewHTML(cardData);

    // Hide pagination
    document.querySelector('.pagination-wrapper').style.display = 'none';
    
    // Use requestAnimationFrame to ensure scroll happens after DOM update
    requestAnimationFrame(() => {
        // Force a reflow to ensure the new content is rendered
        document.body.offsetHeight;
        // Scroll to top with smooth behavior
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
}

// Function to generate detail view HTML
function generateDetailViewHTML(data) {
    // Get category type from mapping if available
    let categoryType = '-';
    if (data.activity.category.main && categoryMapping[data.activity.category.main]) {
        categoryType = data.activity.category.type || categoryMapping[data.activity.category.main][0];
    }

    return `
        <div class="col-12">
            <div class="card detail-card">
                <div class="card-body p-1">
                    <h3 class="detail-title mb-4">${data.title}</h3>
                    
                    <!-- Employee Information Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Employee Information</h5>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Full Name</label>
                                    <span class="detail-value">${data.employee.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Initial</label>
                                    <span class="detail-value employee-code">${data.employee.code}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Email</label>
                                    <span class="detail-value">${data.employee.email}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Department</label>
                                    <span class="detail-value">${data.employee.department}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Manager Name</label>
                                    <span class="detail-value">${data.employee.manager.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Manager Email</label>
                                    <span class="detail-value">${data.employee.manager.email}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Division</label>
                                    <span class="division-badge">${data.division}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Time Information Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Time Activity</h5>
                        <div class="row g-3">
                            <div class="row g-3 mb-3 time-activity-cards">
                                <div class="col-6">
                                    <div class="detail-status-card check-in no-hover">
                                        <div class="detail-info-group">
                                            <label class="detail-label">Check In Time</label>
                                            <span class="detail-value">${data.checkIn}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="detail-status-card check-out no-hover">
                                        <div class="detail-info-group">
                                            <label class="detail-label">Check Out Time</label>
                                            <span class="detail-value">${data.checkOut || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Created By</label>
                                    <span class="detail-value">${data.createdBy || data.employee.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Created On</label>
                                    <span class="detail-value">${data.createdOn || '-'}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Modified By</label>
                                    <span class="detail-value">${data.modifiedBy || data.employee.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Modified On</label>
                                    <span class="detail-value">${data.modifiedOn || '-'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detail Activity Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Detail Activity</h5>
                        <div class="row g-4">
                            <!-- Status Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Status</label>
                                    ${data.activityStatus ? `
                                        <span class="activity-status status-${data.activityStatus} large-badge">
                                            ${data.activityStatus.charAt(0).toUpperCase() + data.activityStatus.slice(1)}
                                        </span>
                                    ` : '<span class="detail-value">-</span>'}
                                </div>
                            </div>

                            <!-- Huddle Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Related Huddle Subject (If Any)</label>
                                    <span class="detail-value">${data.activity.huddle || '-'}</span>
                                </div>
                            </div>

                            <!-- Project Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Project SproBest</label>
                                    <span class="detail-value">${data.activity.project.sproBest}</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Project Name</label>
                                    <span class="detail-value">${data.activity.project.name}</span>
                                </div>
                            </div>

                            <!-- Software Development Checkbox -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Software Development</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" ${data.activity.softwareDev ? 'checked' : ''} disabled>
                                        <label class="form-check-label">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Application -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Application</label>
                                    <span class="detail-value">${data.activity.application || '-'}</span>
                                </div>
                            </div>

                            <!-- Program ID -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Program ID</label>
                                    <span class="detail-value">${data.activity.programId || '-'}</span>
                                </div>
                            </div>

                            <!-- Category Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Category</label>
                                    <span class="detail-value">${data.activity.category.main || '-'}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Category Type</label>
                                    <span class="detail-value">${categoryType}</span>
                                </div>
                            </div>

                            <!-- Activity Note -->
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label">Activity</label>
                                    <div class="activity-note">
                                        ${data.activity.note || '-'}
                                    </div>
                                </div>
                            </div>

                            <!-- Activity Description -->
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label">Description</label>
                                    <div class="activity-note">
                                        ${data.activity.description || '-'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Approval Section -->
                    <div class="detail-approval-section">
                        <h5 class="section-title mb-3">Approval</h5>
                        <div class="approval-card">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Status</label>
                                        ${data.approval.status ? `
                                            <span class="approval-badge approval-${data.approval.status} large-badge">
                                                ${data.approval.status.charAt(0).toUpperCase() + data.approval.status.slice(1)}
                                            </span>
                                        ` : '<span class="detail-value">-</span>'}
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="detail-info-group text-md-end mt-2">
                                        <label class="detail-label">Approved By</label>
                                        <div class="approver-info">
                                            <span class="detail-value">${data.approval.approver || '-'}</span>
                                            ${data.approval.time ? `
                                                <small class="text-muted ms-2">${data.approval.time.split(' ')[0]}</small>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to initialize event listeners
function initializeEventListeners() {
    // Search input handling
    const searchInput = document.querySelector('.search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Add dropdown label update functionality
    document.querySelectorAll('.favorite-searches .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedText = e.target.textContent;
            currentViewSelection = selectedText; // Update the state
            const dropdownButton = document.querySelector('#favoriteSearchesDropdown');
            dropdownButton.innerHTML = `<i class="bi bi-star me-2"></i>${selectedText}`;
        });
    });
    
    // Refresh button handler
    const refreshButton = document.querySelector('.btn-refresh');
    refreshButton.addEventListener('click', refreshData);
}

// Function to add click handlers to cards
function addCardClickHandlers() {
    document.querySelectorAll('[data-card-id]').forEach(card => {
        card.addEventListener('click', () => {
            const cardId = parseInt(card.dataset.cardId);
            const cardData = filteredData[cardId];
            showDetailView(cardData);
        });
    });
}

// Function to get logged in user name
function getLoggedInUserName() {
    const userNameElement = document.querySelector('.user-name strong');
    return userNameElement ? userNameElement.textContent : 'Unknown User';
}

// Function to handle form submission
function handleNewActivitySubmit(e) {
    e.preventDefault();
    
    // Get current date and time for timestamps
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    // Format current time for check-in (HH:mm format)
    const currentTime = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });

    // Get logged in user name
    const userName = getLoggedInUserName();

    // Create new activity object from form data
    const newActivity = {
        title: document.getElementById('activityTitle').value,
        status: 'check-in', // Always set to check-in for new activities
        employee: {
            name: document.getElementById('fullName').value,
            code: document.getElementById('initial').value,
            email: document.getElementById('email').value,
            department: document.getElementById('department').value,
            manager: {
                name: document.getElementById('managerName').value,
                email: document.getElementById('managerEmail').value
            }
        },
        division: document.getElementById('division').value,
        checkIn: currentTime, // Use current time for check-in
        checkOut: null, // Always null for new activities
        activityStatus: 'draft', // Set initial status as draft
        duration: null,
        activity: {
            application: document.getElementById('application').value,
            programId: document.getElementById('programId').value,
            huddle: document.getElementById('huddle').value,
            project: {
                sproBest: document.getElementById('projectSproBest').value,
                name: document.getElementById('projectName').value
            },
            category: {
                main: document.getElementById('category').value,
                type: document.getElementById('categoryType').value
            },
            softwareDev: document.getElementById('softwareDev').checked,
            note: document.getElementById('activityNote').value,
            description: document.getElementById('activityDescription').value
        },
        approval: {
            status: '',
            approver: '',
            time: ''
        },
        createdBy: userName,
        modifiedBy: userName,
        createdOn: timestamp,
        modifiedOn: timestamp
    };

    // Add the new activity to the data array
    cardData.unshift(newActivity);
    filteredData = [...cardData];

    // Show success message
    alert('Activity added successfully!');

    // Return to list view
    showListView();
}

// Function to toggle section visibility
function toggleSection(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderCards();

    // Add click handler for new activity button
    document.querySelector('.btn-new-activity').addEventListener('click', (e) => {
        e.preventDefault();
        showNewActivityForm();
    });
}); 